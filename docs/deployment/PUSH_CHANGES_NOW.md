# Push Changes to Shopify - Quick Guide

## What Needs to Be Pushed

The routing fixes I just made are **local only** - they need to be pushed to Shopify to take effect:

### Files Changed:
- ✅ `sections/header.liquid` - Members button now links to login
- ✅ `sections/hero.liquid` - Signup button links to register
- ✅ `sections/member-benefits.liquid` - Signup button links to register
- ✅ `templates/collection.liquid` - Shop page shows all products

## How to Push

### Option 1: Push to Your Theme (bekky/shopify-liquid)
```bash
shopify theme push --theme=149641461898
```

This will push all changes to your `bekky/shopify-liquid` theme.

### Option 2: Push Only Changed Files
```bash
# Push sections (header, hero, member-benefits)
shopify theme push --theme=149641461898 --only sections

# Push collection template
shopify theme push --theme=149641461898 --only templates/collection.liquid
```

### Option 3: Push Everything
```bash
shopify theme push --theme=149641461898
```

## After Pushing

1. **Refresh your store** - The changes will be live immediately
2. **Test the buttons:**
   - Members button → Should go to `/account/login`
   - Signup buttons → Should go to `/account/register`
   - Shop page → Should show products from Shopify

## Note

If you want these changes on the **live/published theme** instead, push to:
```bash
shopify theme push --theme=141683490954
```

But I recommend pushing to `bekky/shopify-liquid` first, then publishing that theme.

