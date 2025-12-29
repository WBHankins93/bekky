# Customer Accounts Setup Guide

## The Problem

You're seeing two issues:
1. **Error when signing up**: "Customer account creation has been disabled"
2. **White Shopify account page** (Image 3) instead of your custom neon-themed dashboard

## Root Cause

Shopify has two customer account systems:

### 1. Customer Account API (New - Hosted by Shopify)
- ✅ Supports Google SSO/OAuth
- ❌ Uses Shopify's hosted white pages (can't customize)
- ❌ Can't use custom Liquid templates
- ❌ Shows the standard Shopify account interface you saw

### 2. Classic Accounts (Traditional - Theme-Based)
- ✅ Can use custom Liquid templates (your neon dashboard)
- ✅ Full control over design
- ❌ No Google SSO (email/password only)

## Solution: Enable Classic Accounts

To use your custom neon-themed dashboard:

1. **Go to Shopify Admin**
2. **Navigate to**: Settings > Customer accounts
3. **Select**: "Classic accounts" (NOT "Customer account API")
4. **Save**

## What This Means

- ✅ Your custom dashboard at `/account` will work
- ✅ Custom login/register pages will work
- ✅ Neon theme will be applied
- ❌ Google SSO won't work (email/password only)

## After Enabling Classic Accounts

1. Visit `/account/register` - should show your custom signup page
2. Create an account
3. After login, visit `/account` - should show your custom dashboard with:
   - Member name and info
   - BekkyBucks balance (Joy widget placeholder)
   - Purchase history with all details

## If You Need Google SSO

If you absolutely need Google SSO, you'll need to:
- Use Customer Account API (hosted pages)
- Accept the white Shopify interface
- Cannot use custom dashboard templates

**Recommendation**: Use Classic accounts for the custom experience, and add Google SSO later if needed (requires custom implementation).

