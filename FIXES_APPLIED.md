# Fixes Applied - December 10, 2024

## Issues Fixed

### 1. ✅ Members Button → Signup/Benefits Page
**Problem:** Members button was linking to `/account/login` instead of the signup/benefits page.

**Fix:** Changed Members button in header (desktop and mobile) to link to `/pages/members`:
- `sections/header.liquid` - Updated both desktop and mobile Members buttons

**Files Changed:**
- `sections/header.liquid` (lines 47, 82)

---

### 2. ✅ Gallery Link → Handles "gallery-1" Endpoint
**Problem:** Gallery page was created with handle "gallery-1" instead of "gallery", causing 404 errors.

**Fix:** Updated gallery links to dynamically find the page using both "gallery" and "gallery-1" handles:
```liquid
{%- assign gallery_page = pages['gallery'] | default: pages['gallery-1'] -%}
<a href="{{ gallery_page.url | default: '/pages/gallery' }}" ...>
```

**Files Changed:**
- `sections/header.liquid` (lines 41, 81)

**Note:** To permanently fix this, go to Shopify Admin > Online Store > Pages > Gallery page, and change the handle from "gallery-1" to "gallery" (if possible), or delete the old page and create a new one with handle "gallery".

---

### 3. ✅ Shop Page Product Display
**Problem:** Shop page wasn't displaying products from Shopify store.

**Fix:** Improved the collection template to:
- Better handle the "all" collection
- Add fallback to show products from any available collection if "all" doesn't exist
- Display products correctly when visiting `/collections/all`

**Files Changed:**
- `templates/collection.liquid` (lines 119-179)

**How It Works:**
- When visiting `/collections/all`, it shows all products from the "all" collection
- If "all" collection doesn't exist, it falls back to the first available collection with products
- Products are automatically pulled from Shopify Admin collections

**To Add Products:**
1. Go to Shopify Admin > Products > Add product
2. Add products to collections (Jerseys, Lingerie, Hoodies, etc.)
3. Products will automatically appear on the shop page

---

### 4. ✅ Signup Buttons → Register Page
**Problem:** User reported signup buttons redirecting to gallery page (incorrect).

**Fix:** Verified that signup buttons are correctly configured:
- Hero "Join BBA Members" button: Uses `routes.account_register_url` (default: `/account/register`)
- Member Benefits "Sign Up Free" button: Uses `routes.account_register_url` (default: `/account/register`)

**Files Verified:**
- `sections/hero.liquid` (line 36)
- `sections/member-benefits.liquid` (line 54)

**Note:** If buttons are still redirecting incorrectly, check Shopify Admin > Online Store > Themes > Customize:
- Hero section > Members Button Link should be empty (uses default) or set to `/account/register`
- Member Benefits section > CTA Link should be empty (uses default) or set to `/account/register`

---

### 5. ⚠️ Gallery Page Showing Member Content
**Problem:** Gallery page is displaying member signup/benefits content instead of gallery content.

**Root Cause:** The Gallery page in Shopify Admin has the **wrong template assigned**.

**Fix Required (Manual):**
1. Go to Shopify Admin > Online Store > Pages
2. Find the "Gallery" page (or "Gallery-1" if that's the handle)
3. Click to edit it
4. In the **Template** dropdown, select `page.gallery` (NOT `page.members`)
5. Save the page

The `page.gallery.liquid` template is correct and shows "Bekky in the Wild" with a "Coming soon" message.

---

## Summary of Changes

| Issue | Status | Files Changed |
|-------|--------|---------------|
| Members button → signup page | ✅ Fixed | `sections/header.liquid` |
| Gallery link handles "gallery-1" | ✅ Fixed | `sections/header.liquid` |
| Shop page product display | ✅ Fixed | `templates/collection.liquid` |
| Signup buttons → register | ✅ Verified | (Already correct) |
| Gallery page wrong template | ⚠️ Manual fix needed | (Shopify Admin) |

---

## Next Steps

1. **Push changes to Shopify:**
   ```bash
   shopify theme push --theme=149641461898
   ```

2. **Fix Gallery page template (in Shopify Admin):**
   - Online Store > Pages > Gallery
   - Change template from `page.members` to `page.gallery`

3. **Verify signup button links (in Shopify Admin):**
   - Online Store > Themes > Customize
   - Check Hero and Member Benefits sections
   - Ensure button links are empty (use defaults) or set to `/account/register`

4. **Add products to store:**
   - Products > Add product
   - Add to collections (Jerseys, Lingerie, etc.)
   - Products will appear on shop page automatically

---

## Testing Checklist

After pushing changes:
- [ ] Members button goes to `/pages/members` (signup/benefits page)
- [ ] Gallery button works (handles both "gallery" and "gallery-1")
- [ ] Shop page shows products from Shopify store
- [ ] Signup buttons go to `/account/register`
- [ ] Gallery page shows "Bekky in the Wild" content (not member content)

