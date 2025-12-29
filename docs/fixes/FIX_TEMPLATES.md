# Fix: Templates Not Showing in Page Creation

## The Problem
When creating pages, Shopify shows templates from the **published/live theme**, not unpublished themes.

## Current Situation
- **Publisher** (#141683490954) = Currently LIVE theme (this is what page creation uses)
- **bekky/shopify-liquid** (#149641461898) = Your theme with templates (unpublished)

## Solution Options

### Option 1: Push Templates to Live Theme (Quick Fix)
Run this in your terminal:
```bash
shopify theme push --theme=141683490954 --only templates
```
This will add your templates to the live theme so you can create pages immediately.

### Option 2: Publish Your Theme (Recommended)
1. Go to Shopify Admin > Online Store > Themes
2. Find "bekky/shopify-liquid" in the Theme library
3. Click "Publish" button
4. Confirm the publish

This makes your theme live and all templates will be available.

## After Either Option
1. Refresh the "Add page" screen
2. Click Template dropdown
3. You should see: about, members, gallery, blog

