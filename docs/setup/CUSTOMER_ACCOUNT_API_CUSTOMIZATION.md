# Customizing Shopify Customer Account API Pages

## Important Note
Customer Account API pages are **fully hosted by Shopify** on their domain (`shopify.com/authentication/...`). These pages **cannot** be customized with Liquid templates or theme JavaScript because they're not part of your theme.

## How to Customize Customer Account API Pages

### 1. Update Logo on Login Page

**Steps:**
1. Go to **Shopify Admin**
2. Navigate to **Settings > Customer accounts**
3. Click **Manage** under "Customer account API"
4. Go to **Branding** section
5. Upload your `big-butt-logo-words.png` image as the logo
6. Save

This will update the logo on all Customer Account API pages (login, register, account, etc.).

### 2. Add Homepage Link to Login Page

Unfortunately, **you cannot add custom links** to Customer Account API pages using theme code. These pages are fully controlled by Shopify.

**Options:**

**Option A: Use Customer Account UI Extensions (Advanced)**
- Requires creating a Shopify app extension
- More complex setup
- Allows custom UI elements on Customer Account API pages

**Option B: Switch to Classic Accounts**
- Use your custom `templates/customers/login.liquid` template
- Full control over design and links
- No Google SSO support

**Option C: Accept Shopify's Default**
- Customer Account API pages will use Shopify's default design
- Logo can be customized via Admin settings
- No custom links possible without app extensions

## Recommendation

If you need a homepage link on the login page, consider:
1. **Switching to Classic Accounts** - Use your custom login template (already has homepage link)
2. **Creating a Customer Account UI Extension** - More work but keeps Customer Account API
3. **Accepting the limitation** - Users can use browser back button or navigate via your site's header

