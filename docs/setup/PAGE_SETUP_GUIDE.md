# Page Setup Guide - Big Butt Association

## Quick Setup Checklist

All page **templates** are already created in your theme. You just need to create the **pages** in Shopify Admin and assign the templates.

## Pages to Create

### 1. About Page ✅
- **Go to:** Online Store > Pages > Add page
- **Title:** About
- **Content:** (Leave blank or add intro text - template handles the rest)
- **Template:** Select `page.about` from dropdown
- **URL:** Will be `/pages/about` (auto-generated)
- **Status:** Published
- **Save**

### 2. Members Page ✅
- **Go to:** Online Store > Pages > Add page
- **Title:** Members
- **Content:** (Leave blank - template handles the rest)
- **Template:** Select `page.members` from dropdown
- **URL:** Will be `/pages/members` (auto-generated)
- **Status:** Published
- **Save**

### 3. Gallery Page ✅
- **Go to:** Online Store > Pages > Add page
- **Title:** Gallery
- **Content:** Add your gallery content here
- **Template:** Select `page` from dropdown (generic page template)
- **URL:** Will be `/pages/gallery` (auto-generated)
- **Status:** Published
- **Save**

### 4. Blog Page ✅
- **Go to:** Online Store > Pages > Add page
- **Title:** Blog
- **Content:** Add your blog intro or use Shopify's blog feature
- **Template:** Select `page` from dropdown
- **URL:** Will be `/pages/blog` (auto-generated)
- **Status:** Published
- **Save**

## Automatic Pages (No Setup Needed)

These pages are automatically available via Shopify's built-in features:

### Member Login ✅
- **URL:** `/account/login`
- **Template:** `templates/customers/login.liquid` (already created)
- **No setup needed** - Shopify handles this automatically

### Sign Up / Register ✅
- **URL:** `/account/register`
- **Template:** `templates/customers/register.liquid` (already created)
- **No setup needed** - Shopify handles this automatically

### Member Dashboard ✅
- **URL:** `/account`
- **Template:** `templates/customers/account.liquid` (already created)
- **No setup needed** - Available after customer logs in

## Shop Page ✅

The shop page is handled by Shopify Collections:
- **URL:** `/collections/all` or your collection URLs
- **Template:** `templates/collection.liquid` (already created)
- **No setup needed** - Collections automatically use this template

## Quick Setup Options

### Option 1: Manual Setup (Easiest - ~5 minutes)
1. Go to **Online Store > Pages**
2. Click **Add page** for each page above
3. Fill in the details
4. Select the appropriate template
5. Save

### Option 2: Automated Script (Requires API Access)
If you have Shopify Admin API access:

1. **Create a Private App:**
   - Go to: Settings > Apps and sales channels > Develop apps
   - Click "Create an app"
   - Name it "Page Creator" or similar
   - Enable "Read and write" access to "Online Store > Pages"
   - Install the app
   - Copy the Admin API access token

2. **Run the script:**
   ```bash
   export SHOPIFY_STORE=zkq0gh-tg.myshopify.com
   export SHOPIFY_TOKEN=your_admin_api_token_here
   node scripts/create-pages-api.js
   ```

   Or create a `.env` file:
   ```
   SHOPIFY_STORE=zkq0gh-tg.myshopify.com
   SHOPIFY_TOKEN=your_token_here
   ```

3. **Verify in Shopify Admin:**
   - Go to Online Store > Pages
   - Check that all pages were created
   - Edit each page to verify template assignment

## Verification

After creating pages, verify they work:
- ✅ `/pages/about` - Shows About page
- ✅ `/pages/members` - Shows Members signup page
- ✅ `/pages/gallery` - Shows Gallery page
- ✅ `/pages/blog` - Shows Blog page
- ✅ `/account/login` - Shows Login page
- ✅ `/account/register` - Shows Signup page
- ✅ `/collections/all` - Shows Shop/Collection page

## Notes

- All templates are already in your theme
- You just need to create the page records in Shopify Admin
- Templates will automatically be applied when you select them
- Header navigation is already set up to link to these pages

