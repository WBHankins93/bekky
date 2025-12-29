# Routing Fixes Applied

## ✅ Fixed Issues

### 1. Members Button → Login Page
- **Header Members button** now links to `/account/login` (was `/pages/members`)
- **Mobile Members button** now links to `/account/login`
- This is correct - Members button should go to login page

### 2. Signup Buttons → Register Page
- **Hero "Join BBA Members" button** now links to `/account/register` (was `/account`)
- **Member Benefits "Sign Up Free" button** now links to `/account/register` (was `/account`)
- This is correct - signup buttons should go to registration page

### 3. Shop Page → Shows All Products
- **Collection template** now properly displays all products when viewing `/collections/all`
- Products are pulled from Shopify collections automatically
- When you add products to collections in Shopify Admin, they'll appear on the shop page

## ⚠️ Gallery Page Issue

If the Gallery page is showing member signup content, this means:
- The Gallery page in Shopify Admin has the **wrong template assigned**

**Fix:**
1. Go to Shopify Admin > Online Store > Pages
2. Find the "Gallery" page
3. Edit it
4. In the Template dropdown, select `gallery` (not `members`)
5. Save

The gallery template (`page.gallery.liquid`) is correct - it just shows "Bekky in the Wild" and "Coming soon" message.

## Current Routing

| Button/Link | Destination | Status |
|------------|-------------|--------|
| 👑 Members (header) | `/account/login` | ✅ Fixed |
| Join BBA Members (hero) | `/account/register` | ✅ Fixed |
| Sign Up Free (benefits) | `/account/register` | ✅ Fixed |
| Shop Now | `/collections/all` | ✅ Working |
| Gallery page | `/pages/gallery` | ⚠️ Check template assignment |

## Shop Page Connection

The shop page (`templates/collection.liquid`) is **already connected** to Shopify products:
- It automatically displays products from collections
- When you visit `/collections/all`, it shows all products
- When you visit `/collections/jerseys`, it shows jerseys
- Products are pulled from Shopify Admin automatically

**To add products:**
1. Go to Shopify Admin > Products
2. Add products
3. Assign them to collections (Jerseys, Hoodies, etc.)
4. They'll automatically appear on the shop page

