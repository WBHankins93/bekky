# Google Forms Proxy Setup - Workaround for 403 Error

## Why This Is Needed

Google Forms blocks direct external submissions with a 403 Forbidden error due to CSRF protection. This proxy solution uses Google Apps Script to bypass this restriction.

## Setup Steps

### 1. Create Google Apps Script Project

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Give it a name like "BBA Model Form Proxy"
4. Delete the default `myFunction` code
5. Copy the entire contents of `scripts/google-forms-proxy.gs` into the editor
6. **IMPORTANT:** Make sure the `GOOGLE_FORM_URL` at the top matches your actual Google Form:
   ```
   var GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
   ```

### 2. Deploy as Web App

1. Click the "Deploy" button (top right)
2. Select "New deployment"
3. Click the gear icon ⚙️ next to "Select type"
4. Choose "Web app"
5. Configure:
   - **Description:** "BBA Model Application Form Proxy"
   - **Execute as:** "Me" (your account)
   - **Who has access:** "Anyone" (required for external submissions)
6. Click "Deploy"
7. **COPY THE WEB APP URL** - you'll need this!
   - It will look like: `https://script.google.com/macros/s/AKfycbz.../exec`

### 3. Update Form Code

1. Open `templates/page.model-application.liquid`
2. Find the line with `var googleFormUrl = 'https://docs.google.com/forms/...'`
3. Replace it with your Apps Script Web App URL:
   ```javascript
   var googleFormUrl = 'https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec';
   ```
4. Save and push to Shopify

### 4. Test

1. Submit a test form on your site
2. Check your Google Sheet - the data should appear
3. If it doesn't work, check the Apps Script logs:
   - In Apps Script editor, click "Executions" (left sidebar)
   - View the logs to see what happened

## Troubleshooting

### Still getting 403?
- Make sure the Web App is set to "Anyone" access (not "Anyone with Google account")
- Verify the `GOOGLE_FORM_URL` in the script matches your actual Google Form

### Data not appearing in Google Sheet?
- Check Apps Script "Executions" logs for errors
- Verify the entry IDs in your form match what's in the code
- Make sure your Google Form is published and accepting responses

### Getting "Script function not found"?
- Make sure `doPost` function exists in your Apps Script
- Verify the deployment is active (check "Manage deployments" in Apps Script)

## How It Works

1. User submits form on your Shopify site
2. JavaScript sends data to your Apps Script Web App URL
3. Apps Script receives the data and forwards it to Google Forms (from Google's servers, bypassing CSRF)
4. Google Forms accepts the submission (no 403 error)
5. Data appears in your Google Sheet

## Security Note

The Web App URL will be public. Anyone with the URL can potentially submit data to your Google Form. If you want to add authentication or rate limiting, you'll need to modify the Apps Script code.

