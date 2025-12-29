# Google SSO Setup for Shopify Customer Accounts

## Overview
Shopify's Customer Account API supports OAuth providers including Google. The login and register pages are set up to work with Shopify's customer account system.

## Configuration Steps

### 1. Enable Customer Accounts in Shopify Admin
1. Go to **Settings > Customer accounts**
2. Select **Customer accounts** (not "Accounts are disabled")
3. Choose your account type:
   - **Classic accounts** - Traditional email/password
   - **Customer account API** - Modern accounts with OAuth support (RECOMMENDED)

### 2. Configure Google OAuth (Customer Account API Required)
If using Customer Account API:
1. Go to **Settings > Customer accounts**
2. Under "Customer account API", click **Manage**
3. Navigate to **OAuth providers**
4. Click **Add provider** and select **Google**
5. Follow the setup instructions to configure your Google OAuth credentials

### 3. How It Works
- The login page (`templates/customers/login.liquid`) includes a "Continue with Google" button
- The register page (`templates/customers/register.liquid`) includes a "Sign up with Google" button
- When clicked, these will redirect to Shopify's OAuth flow
- After authentication, users are redirected back to your site

### 4. Testing
1. Visit `/account/login` or `/account/register`
2. Click "Continue with Google" or "Sign up with Google"
3. Complete the Google OAuth flow
4. You should be redirected back and logged in

## Notes
- Google SSO requires **Customer Account API** (not classic accounts)
- OAuth providers must be configured in Shopify Admin
- The theme templates are ready - you just need to configure OAuth in Shopify Admin
- If OAuth is not configured, users can still use email/password login

