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

// Replace with your actual Google Form's formResponse URL
// IMPORTANT: Make sure this matches your actual Google Form URL!
var GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdRxXg4w8HnBlzN-qXPAzi9xcsSNLcMWyAQ9LFEfWns841ecA/formResponse';

/**
 * Main function to handle POST requests
 * Handles both form data (from iframe) and raw POST data
 */
function doPost(e) {
  try {
    // Verify GOOGLE_FORM_URL is defined
    if (typeof GOOGLE_FORM_URL === 'undefined' || !GOOGLE_FORM_URL) {
      throw new Error('GOOGLE_FORM_URL is not defined. Please set it at the top of the script.');
    }
    
    // Log the incoming request for debugging
    Logger.log('Received POST request');
    Logger.log('GOOGLE_FORM_URL: ' + GOOGLE_FORM_URL);
    
    // Get form data - can come from e.parameters (form submission) or e.postData (raw POST)
    var formData = {};
    
    if (e.parameters && Object.keys(e.parameters).length > 0) {
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
    } else if (e.postData) {
      // Raw POST data (URL-encoded string)
      Logger.log('Processing raw POST data');
      var postData = e.postData.getDataAsString();
      Logger.log('Post data: ' + postData);
      
      var pairs = postData.split('&');
      
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        if (pair.length === 2) {
          var key = decodeURIComponent(pair[0]);
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
    
    Logger.log('Parsed form data: ' + JSON.stringify(formData));
    
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
    
    // Submit to Google Forms using UrlFetchApp
    var options = {
      'method': 'post',
      'payload': payload,
      'muteHttpExceptions': true,
      'followRedirects': true
    };
    
    Logger.log('Submitting to Google Forms: ' + GOOGLE_FORM_URL);
    
    var response = UrlFetchApp.fetch(GOOGLE_FORM_URL, options);
    var responseCode = response.getResponseCode();
    var responseText = response.getContentText();
    
    Logger.log('Response Code: ' + responseCode);
    Logger.log('Response length: ' + responseText.length);
    
    // Check if submission was successful
    // Google Forms returns 200 with a redirect or success message
    var isSuccess = false;
    if (responseCode === 200) {
      // Check response content for success indicators
      if (responseText.includes('Your response has been recorded') || 
          responseText.includes('Thanks for your response') ||
          responseText.includes('formResponse') ||
          responseText.length > 1000) { // Usually success pages are longer
        isSuccess = true;
      }
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
      
      // Return HTML error response that stays in iframe
      var html = '<!DOCTYPE html><html><head><title>Error</title></head><body style="margin:0;padding:0;background:transparent;"><script>window.parent.postMessage({status:"error", message:"Failed to submit form"}, "*");</script><div style="display:none;">Error</div></body></html>';
      
      return HtmlService
        .createHtmlOutput(html)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
    
  } catch (error) {
    // Log error
    Logger.log('ERROR: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    // Return HTML error response that stays in iframe
    var html = '<!DOCTYPE html><html><head><title>Error</title></head><body style="margin:0;padding:0;background:transparent;"><script>window.parent.postMessage({status:"error", message:"' + error.toString().replace(/"/g, '&quot;') + '"}, "*");</script><div style="display:none;">Error</div></body></html>';
    
    return HtmlService
      .createHtmlOutput(html)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
}

/**
 * Handle GET requests (optional - for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'status': 'ok',
      'message': 'Google Forms Proxy is running. Use POST to submit forms.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

