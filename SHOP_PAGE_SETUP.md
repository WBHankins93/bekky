# Shop Page Setup - `/pages/shop`

## ✅ What Was Fixed

### 1. Created Shop Page Template
- **File:** `templates/page.shop.liquid`
- **URL:** `/pages/shop`
- **Purpose:** Displays all products from the "all" collection (same as `/collections/all` but with cleaner URL)

### 2. Updated All Shop Links
All "Shop" buttons and links now point to `/pages/shop` instead of `/collections/all`:

- ✅ Header navigation (desktop & mobile)
- ✅ Hero section "Shop Now" button
- ✅ Featured Collection "View All Products" button

### 3. Homepage Featured Collection
The homepage already has a "Featured Collection" section that can display products from any collection.

**To show "frontpage" collection on homepage:**
1. Go to Shopify Admin > Online Store > Themes > Customize
2. Find the "Featured Collection" section
3. In the "Collection" dropdown, select "frontpage"
4. Save

---

## 📋 Setup Instructions

### Create the Shop Page in Shopify Admin

1. **Go to:** Online Store > Pages > Add page
2. **Title:** Shop
3. **Content:** (Leave blank - template handles all content)
4. **Template:** Select `page.shop` from dropdown
5. **URL:** Will be `/pages/shop` (auto-generated)
6. **Status:** Published
7. **Save**

### Or Use the API Script

If you have Shopify Admin API access, the shop page is included in `scripts/create-pages-api.js`:

```bash
node scripts/create-pages-api.js
```

---

## 🎯 How It Works

### Shop Page (`/pages/shop`)
- Shows all products from the "all" collection
- Includes category filters (Jerseys, Lingerie, Hoodies, etc.)
- Same functionality as `/collections/all` but with a cleaner URL

### Homepage Featured Collection
- Displays products from the collection you select in theme customizer
- Set it to "frontpage" collection to show those products
- This is just a preview - full shop is at `/pages/shop`

---

## 🔗 URL Structure

| Page | URL | Template |
|------|-----|----------|
| Shop (all products) | `/pages/shop` | `page.shop.liquid` |
| Jerseys Collection | `/collections/jerseys` | `collection.liquid` |
| Lingerie Collection | `/collections/lingerie` | `collection.liquid` |
| All Collections | `/collections/all` | `collection.liquid` |

**Note:** Individual collection pages still use `/collections/[handle]` - only the main shop page uses `/pages/shop`.

---

## ✅ Verification Checklist

After setup:
- [ ] Shop page created at `/pages/shop`
- [ ] Shop page uses `page.shop` template
- [ ] Header "Shop" link goes to `/pages/shop`
- [ ] Homepage "Shop Now" button goes to `/pages/shop`
- [ ] Featured Collection section shows "frontpage" products (if configured)
- [ ] All products display correctly on shop page

---

## 🐛 Troubleshooting

### Shop page shows "Products Coming Soon"
- Make sure you have products in your Shopify store
- Products should be in the "all" collection (they are by default)
- Check that products are published and available

### Homepage doesn't show "frontpage" products
- Go to Themes > Customize
- Find "Featured Collection" section
- Select "frontpage" from the Collection dropdown
- Save

### Category filters don't work
- Make sure collections exist in Shopify Admin
- Collections should be: jerseys, lingerie, hoodies, tees, accessories
- Check collection handles match exactly (lowercase, no spaces)

