# Customer Pages Structure - Explained

## The `/customers/` Directory

In Shopify, the `templates/customers/` directory is **special** - it's for Shopify's built-in customer account system. These templates are automatically used by Shopify routes.

## Page Breakdown

### 1. `templates/page.members.liquid` 
- **URL:** `/pages/members` (custom page - needs to be created in Shopify Admin)
- **Purpose:** Landing/signup page with benefits
- **Content:** Shows member benefits + signup form
- **From:** `app/members/page.tsx`
- **Status:** Public page (anyone can view)

### 2. `templates/customers/register.liquid`
- **URL:** `/account/register` (automatic - no page creation needed)
- **Purpose:** Signup/registration form
- **Content:** Shows member benefits + signup form (same as page.members)
- **From:** `app/members/page.tsx` (same source)
- **Status:** Automatic Shopify route

### 3. `templates/customers/login.liquid`
- **URL:** `/account/login` (automatic - no page creation needed)
- **Purpose:** Login form for existing members
- **Content:** Email/password login form + Google SSO button
- **Status:** Automatic Shopify route

### 4. `templates/customers/account.liquid`
- **URL:** `/account` (automatic - no page creation needed)
- **Purpose:** Member dashboard (after login)
- **Content:** BekkyBucks balance + Purchase history
- **From:** `app/members/dashboard/page.tsx`
- **Status:** Automatic Shopify route (requires login)

## Current Routing (After Fixes)

| Button/Link | Destination | Template Used |
|------------|-------------|---------------|
| 👑 Members (header) | `/account/login` | `customers/login.liquid` |
| Join BBA Members (hero) | `/account/register` | `customers/register.liquid` |
| Sign Up Free (benefits) | `/account/register` | `customers/register.liquid` |
| After login | `/account` | `customers/account.liquid` |

## The Confusion

You're right - `page.members.liquid` and `customers/register.liquid` are **very similar** (both show benefits + signup form). 

**The difference:**
- `page.members.liquid` = Custom page at `/pages/members` (optional - you might not need this)
- `customers/register.liquid` = Shopify's automatic signup route at `/account/register` (this is what we're using)

## Recommendation

Since we're routing signup buttons to `/account/register`, you might not need `page.members.liquid` at all. But it's there if you want a public landing page at `/pages/members` that also shows benefits.

## Summary

- ✅ `customers/login.liquid` = Login page (what Members button links to)
- ✅ `customers/register.liquid` = Signup page (what signup buttons link to)
- ✅ `customers/account.liquid` = Dashboard (BekkyBucks & purchase history)
- ⚠️ `page.members.liquid` = Optional landing page (similar to register, but custom route)

All customer account templates work automatically - no page creation needed!

