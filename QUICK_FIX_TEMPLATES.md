# Quick Fix: Templates Not Showing in Dropdown

## Problem
Only "contact" template shows in the dropdown, not your custom templates (about, members, gallery, blog).

## Solution: Push Theme to Shopify

The templates exist locally but haven't been uploaded to Shopify yet.

### Option 1: Push All Templates (Recommended)
```bash
shopify theme push --only templates
```

### Option 2: Push Entire Theme
```bash
shopify theme push
```

### Option 3: Push Specific Templates
```bash
shopify theme push templates/page.about.liquid templates/page.members.liquid templates/page.gallery.liquid templates/page.blog.liquid
```

## After Pushing

1. **Refresh the Shopify Admin page** (the "Add page" screen)
2. **Click the Template dropdown** again
3. You should now see:
   - ✓ Default page
   - about
   - members
   - gallery
   - blog
   - contact (existing)

## Templates You Have

✅ `templates/page.about.liquid` - About page
✅ `templates/page.members.liquid` - Members signup
✅ `templates/page.gallery.liquid` - Gallery
✅ `templates/page.blog.liquid` - Blog
✅ `templates/page.liquid` - Default page template

All templates are ready - just need to push them to Shopify!

