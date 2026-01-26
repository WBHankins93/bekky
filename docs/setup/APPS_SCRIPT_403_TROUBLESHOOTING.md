# Troubleshooting Apps Script 403 Error

## The Problem

You're getting a 403 error from your Apps Script web app URL. This means the Apps Script itself is blocking the request, NOT Google Forms.

## Common Causes & Fixes

### 1. Web App Not Set to "Anyone" (MOST COMMON)

**Fix:**
1. Go to [script.google.com](https://script.google.com)
2. Open your project
3. Click "Deploy" → "Manage deployments"
4. Click the pencil icon (✏️) to edit
5. **CRITICAL:** Under "Who has access", select **"Anyone"** (NOT "Anyone with Google account")
6. Click "Deploy"
7. **Copy the NEW Web App URL** (it might change) and update it in your form code

### 2. Deployment Not Active

**Check:**
1. Go to "Deploy" → "Manage deployments"
2. Make sure the deployment shows "Active" or "New version"
3. If it shows as inactive, create a new deployment

### 3. Apps Script Needs Authorization

**Fix:**
1. In your Apps Script editor, run the `doPost` function manually once (this will trigger authorization)
2. Or click "Run" → "doPost" (you'll get an error, but it will prompt for authorization)
3. Authorize all permissions it asks for

### 4. Web App URL Changed After Redeployment

**Fix:**
1. After redeploying, the URL might change
2. Go to "Deploy" → "Manage deployments"
3. Copy the NEW Web App URL
4. Update it in `templates/page.model-application.liquid` (line with `var proxyUrl`)

### 5. Check Execution Logs

To see what's happening:
1. Go to "Executions" (left sidebar in Apps Script)
2. Check the latest execution
3. Look for errors in the logs
4. If you see "GOOGLE_FORM_URL is not defined", the code wasn't updated properly

### 6. Test the Web App Directly

**Test:**
1. Copy your Web App URL (the `/exec` URL)
2. Paste it in a browser
3. You should see: `{"status":"ok","message":"Google Forms Proxy is running. Use POST to submit forms."}`
4. If you get 403, the deployment settings are wrong

## Quick Fix Checklist

- [ ] Web App is set to "Anyone" (not "Anyone with Google account")
- [ ] Deployment is "Active"
- [ ] Web App URL is correct in form code
- [ ] Apps Script code matches `scripts/google-forms-proxy.gs` exactly
- [ ] `GOOGLE_FORM_URL` is defined inside `doPost` function (not at top)
- [ ] Tested Web App URL directly in browser (should return JSON, not 403)

## If Still Getting 403

Try creating a **brand new deployment**:

1. "Deploy" → "Manage deployments"
2. Click the three dots (⋯) on your current deployment
3. Select "Delete"
4. "Deploy" → "New deployment"
5. Select "Web app"
6. Settings:
   - Description: "BBA Model Form Proxy"
   - Execute as: **"Me"**
   - Who has access: **"Anyone"** ← CRITICAL!
7. Click "Deploy"
8. Copy the NEW Web App URL
9. Update it in your form code

