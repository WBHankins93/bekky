/**
 * Google Apps Script Web App - Proxy for Google Forms Submission
 * This script acts as a proxy to bypass Google Forms' 403 CSRF protection
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Paste this code into the editor
 * 4. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Select type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (or "Anyone with Google account" if you want some auth)
 *    - Click "Deploy"
 * 5. Copy the Web App URL and use it in your form submission code
 */

/**
 * Main function to handle POST requests
 * Handles both form data (from iframe) and raw POST data
 */
function doPost(e) {
  // Define GOOGLE_FORM_URL inside function to avoid scoping issues
  // IMPORTANT: Make sure this matches your actual Google Form URL!
  var GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdRxXg4w8HnBlzN-qXPAzi9xcsSNLcMWyAQ9LFEfWns841ecA/formResponse';
  
  try {
    // Log the incoming request for debugging
    Logger.log('Received POST request');
    Logger.log('Event object exists: ' + (e != null));
    Logger.log('Event type: ' + typeof e);
    
    if (!e) {
      throw new Error('No request data received - event object is null');
    }
    
    Logger.log('GOOGLE_FORM_URL: ' + GOOGLE_FORM_URL);
    Logger.log('Has e.parameters: ' + (e.parameters != null));
    Logger.log('Has e.postData: ' + (e.postData != null));
    
    // Get form data - can come from e.parameters (form submission) or e.postData (raw POST)
    var formData = {};
    
    // Check for parameters first (form-encoded data)
    if (e && e.parameters && typeof e.parameters === 'object') {
      var paramKeys = Object.keys(e.parameters);
      Logger.log('Found ' + paramKeys.length + ' parameters');
      
      if (paramKeys.length > 0) {
        // Form submission via iframe (parameters format)
        Logger.log('Processing form parameters');
        for (var key in e.parameters) {
          var value = e.parameters[key];
          // e.parameters can be arrays for multiple values
          if (Array.isArray(value)) {
            formData[key] = value;
          } else {
            formData[key] = value;
          }
        }
      }
    }
    
    // If no parameters, check for raw POST data
    if (Object.keys(formData).length === 0 && e && e.postData && e.postData.getDataAsString) {
      // Raw POST data (URL-encoded string)
      Logger.log('Processing raw POST data');
      var postData = e.postData.getDataAsString();
      Logger.log('Post data length: ' + postData.length);
      Logger.log('Post data preview: ' + postData.substring(0, 200));
      
      var pairs = postData.split('&');
      
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        if (pair.length === 2) {
          var key = decodeURIComponent(pair[0].replace(/\+/g, ' '));
          var value = decodeURIComponent(pair[1].replace(/\+/g, ' '));
          
          // Handle multiple values for the same key (checkboxes)
          if (formData[key]) {
            // If key already exists, create array
            if (!Array.isArray(formData[key])) {
              formData[key] = [formData[key]];
            }
            formData[key].push(value);
          } else {
            formData[key] = value;
          }
        }
      }
    }
    
    // If still no data, throw error with helpful message
    if (Object.keys(formData).length === 0) {
      Logger.log('ERROR: No form data found in request');
      Logger.log('Event object: ' + JSON.stringify(e));
      Logger.log('e.parameters: ' + (e.parameters ? JSON.stringify(e.parameters) : 'null'));
      Logger.log('e.postData: ' + (e.postData ? 'exists (type: ' + typeof e.postData + ')' : 'null'));
      
      throw new Error('No form data received. Check that the form is submitting correctly. Event object: ' + JSON.stringify(e));
    }
    
    Logger.log('Parsed form data keys: ' + Object.keys(formData).join(', '));
    Logger.log('Parsed form data count: ' + Object.keys(formData).length);
    
    // Build the submission payload for Google Forms
    // Google Forms expects entry.123456789 format
    var payload = {};
    
    for (var key in formData) {
      if (key.startsWith('entry.')) {
        var value = formData[key];
        
        // Handle multiple values (checkboxes)
        // When multiple values exist for same entry ID, send them as array
        // UrlFetchApp will properly format this when making the request
        if (Array.isArray(value)) {
          payload[key] = value; // Send all checkbox values
        } else {
          payload[key] = value;
        }
      }
    }
    
    Logger.log('Payload for Google Forms: ' + JSON.stringify(payload));
    Logger.log('Payload count: ' + Object.keys(payload).length);
    
    // Build URL-encoded form data string for Google Forms
    // Handle multiple values (checkboxes) by sending them with same key multiple times
    var formDataPairs = [];
    
    for (var key in payload) {
      var value = payload[key];
      if (Array.isArray(value)) {
        // For checkboxes, send each value separately with the same entry ID
        for (var i = 0; i < value.length; i++) {
          formDataPairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value[i]));
        }
      } else {
        formDataPairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      }
    }
    
    var formDataString = formDataPairs.join('&');
    
    Logger.log('Form data pairs count: ' + formDataPairs.length);
    Logger.log('Form data string length: ' + formDataString.length);
    
    // Submit to Google Forms using UrlFetchApp
    // Use formDataString directly (UrlFetchApp handles URL-encoded strings)
    var options = {
      'method': 'post',
      'payload': formDataString,
      'contentType': 'application/x-www-form-urlencoded',
      'muteHttpExceptions': true,
      'followRedirects': true
    };
    
    Logger.log('Submitting to Google Forms: ' + GOOGLE_FORM_URL);
    
    var response = UrlFetchApp.fetch(GOOGLE_FORM_URL, options);
    var responseCode = response.getResponseCode();
    var responseText = response.getContentText();
    
    Logger.log('Response Code: ' + responseCode);
    Logger.log('Response length: ' + responseText.length);
    Logger.log('Response preview: ' + responseText.substring(0, 500));
    
    // Check if submission was successful
    // Google Forms returns 200 with a redirect or success message
    var isSuccess = false;
    var errorMessage = '';
    
    if (responseCode === 403) {
      errorMessage = 'Google Forms returned 403 Forbidden. The form may have restrictions on external submissions. Check Google Form settings.';
      Logger.log('ERROR: 403 Forbidden from Google Forms');
      Logger.log('Response text: ' + responseText);
    } else if (responseCode === 200) {
      // Check response content for success indicators
      if (responseText.includes('Your response has been recorded') || 
          responseText.includes('Thanks for your response') ||
          responseText.includes('formResponse') ||
          responseText.length > 1000) { // Usually success pages are longer
        isSuccess = true;
        Logger.log('SUCCESS detected in response');
      } else {
        Logger.log('Response code 200 but no success indicators found');
        errorMessage = 'Unexpected response from Google Forms (200 but no success message)';
      }
    } else {
      Logger.log('Non-200 response code: ' + responseCode);
      errorMessage = 'Google Forms returned error code: ' + responseCode;
    }
    
    if (isSuccess || responseCode === 0) {
      Logger.log('SUCCESS: Form submitted successfully');
      
      // Return HTML response that stays in iframe (doesn't redirect)
      // This prevents the page from navigating away
      var html = '<!DOCTYPE html><html><head><title>Success</title></head><body style="margin:0;padding:0;background:transparent;"><script>window.parent.postMessage({status:"success"}, "*");</script><div style="display:none;">Success</div></body></html>';
      
      return HtmlService
        .createHtmlOutput(html)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
        
    } else {
      Logger.log('ERROR: Failed to submit - Response code: ' + responseCode);
      Logger.log('Error message: ' + errorMessage);
      
      // Return HTML error response that stays in iframe with detailed error
      var errorMsg = errorMessage || 'Failed to submit form (Response code: ' + responseCode + ')';
      var html = '<!DOCTYPE html><html><head><title>Error</title></head><body style="margin:0;padding:0;background:transparent;"><script>window.parent.postMessage({status:"error", message:"' + errorMsg.replace(/"/g, '&quot;').replace(/'/g, '&#39;') + '"}, "*");</script><div style="display:none;">Error</div></body></html>';
      
      return HtmlService
        .createHtmlOutput(html)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
    
  } catch (error) {
    // Log error
    Logger.log('ERROR: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    Logger.log('Error type: ' + error.name);
    
    // Check if it's an authorization error
    var errorMessage = error.toString();
    if (errorMessage.includes('403') || errorMessage.includes('Forbidden') || errorMessage.includes('Authorization')) {
      errorMessage = '403 Forbidden: The Apps Script is not authorized. Please visit the GET URL once to authorize it, or check that the deployment is set to "Anyone".';
    }
    
    // Return HTML error response that stays in iframe
    var html = '<!DOCTYPE html><html><head><title>Error</title></head><body style="margin:0;padding:0;background:transparent;"><script>window.parent.postMessage({status:"error", message:"' + errorMessage.replace(/"/g, '&quot;').replace(/'/g, '&#39;') + '"}, "*");</script><div style="display:none;">Error</div></body></html>';
    
    return HtmlService
      .createHtmlOutput(html)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
}

/**
 * Handle GET requests (required - for authorization and testing)
 * IMPORTANT: Run this function once after deploying to authorize the script
 * This prevents 403 errors on POST requests
 */
function doGet(e) {
  // Return HTML that confirms the script is working
  // This allows the script to be authorized via browser
  var html = '<!DOCTYPE html><html><head><title>Google Forms Proxy - Status</title><style>body{font-family:Arial,sans-serif;padding:20px;text-align:center;background:#f5f5f5;} .container{background:white;padding:30px;border-radius:8px;max-width:500px;margin:50px auto;box-shadow:0 2px 4px rgba(0,0,0,0.1);} .success{color:#4CAF50;font-size:24px;margin-bottom:10px;} h1{color:#333;margin-top:0;} p{color:#666;line-height:1.6;} .status{background:#E8F5E9;border:1px solid #4CAF50;border-radius:4px;padding:15px;margin:20px 0;} .error{background:#FFEBEE;border:1px solid #F44336;color:#C62828;} code{background:#f5f5f5;padding:2px 6px;border-radius:3px;font-family:monospace;}</style></head><body><div class="container"><div class="success">✓</div><h1>Google Forms Proxy</h1><div class="status"><strong>Status:</strong> Running</div><p>The proxy is ready to receive form submissions.</p><p><strong>IMPORTANT:</strong> If you just deployed this script, visiting this page authorizes it. This prevents 403 errors on form submissions.</p><p>Test the proxy by submitting the model application form.</p></div></body></html>';
  
  return HtmlService
    .createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

