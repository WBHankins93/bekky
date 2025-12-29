# Shopify Integration Guide

This document outlines the changes and considerations needed to integrate this Next.js site with Shopify.

## Overview

This site is designed to be converted into a Shopify theme. The current Next.js structure will need to be transformed into Shopify Liquid templates.

## Required Changes for Shopify Integration

### 1. Convert Next.js to Shopify Liquid

#### File Structure Changes

**Current (Next.js):**
```
app/
  ├── page.tsx
  ├── members/page.tsx
  ├── cart/page.tsx
  ├── blog/page.tsx
  └── gallery/page.tsx
```

**Shopify Theme Structure:**
```
theme/
  ├── templates/
  │   ├── index.liquid (home page)
  │   ├── page.members.liquid
  │   ├── page.cart.liquid
  │   └── page.blog.liquid
  ├── sections/
  │   ├── hero.liquid
  │   ├── member-benefits.liquid
  │   ├── products.liquid
  │   ├── about-bekky.liquid
  │   └── newsletter.liquid
  ├── snippets/
  │   ├── header.liquid
  │   ├── footer.liquid
  │   ├── neon-button.liquid
  │   └── neon-card.liquid
  └── assets/
      ├── globals.css
      └── main.js
```

### 2. Replace React Components with Liquid

#### Navigation & Layout
- **Header**: Convert `components/layout/Header.tsx` → `snippets/header.liquid`
- **Footer**: Convert `components/layout/Footer.tsx` → `snippets/footer.liquid`
- **MainLayout**: Remove (Shopify handles layout via `theme.liquid`)

#### Pages
- **Home**: `app/page.tsx` → `templates/index.liquid` + sections
- **Members**: `app/members/page.tsx` → `templates/page.members.liquid`
- **Cart**: `app/cart/page.tsx` → Use Shopify's built-in cart or `templates/cart.liquid`
- **Blog**: `app/blog/page.tsx` → Use Shopify's blog templates

### 3. Product Integration

#### Replace Mock Data with Shopify Objects

**Current (Mock):**
```typescript
const products = [...]; // Static JSON
```

**Shopify (Liquid):**
```liquid
{% for product in collections.all.products %}
  <div class="product-card">
    <img src="{{ product.featured_image | img_url: '400x400' }}" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.price | money }}</p>
  </div>
{% endfor %}
```

### 4. Cart Integration

#### Replace Custom Cart with Shopify Cart API

**Current:**
- Custom cart state management
- Local storage

**Shopify:**
- Use Shopify Cart API (`/cart.js`)
- Use Shopify Cart Drawer or Cart Page
- Update cart count via AJAX

**Implementation:**
```javascript
// Add to cart
fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    items: [{ id: variantId, quantity: 1 }]
  })
});

// Get cart
fetch('/cart.js')
  .then(res => res.json())
  .then(cart => {
    // Update cart count in header
    document.querySelector('.cart-count').textContent = cart.item_count;
  });
```

### 5. Customer Accounts & Members

#### Shopify Customer Accounts

**Members Page Integration:**
- Use Shopify Customer Accounts API
- Store BekkyBucks in Customer Metafields
- Create custom account pages

**BekkyBucks System:**
```liquid
{% assign bekkybucks = customer.metafields.custom.bekkybucks_balance | default: 0 %}
<div class="bekkybucks-display">
  <span>{{ bekkybucks }}</span> BekkyBucks
</div>
```

**Webhook Setup:**
- Listen for `orders/create` webhook
- Calculate BekkyBucks: `order.total_price / 10`
- Update customer metafield via Admin API

### 6. Styling Conversion

#### CSS Changes

**Keep:**
- All custom CSS in `assets/globals.css`
- Tailwind utilities (if using Tailwind for Shopify)
- Neon effects and animations

**Update:**
- Replace Tailwind `@apply` directives with regular CSS (Shopify doesn't support Tailwind compilation)
- Or use Shopify's Tailwind integration (Shopify CLI 3.0+)

**Option 1: Pure CSS**
- Convert all Tailwind classes to custom CSS classes
- Maintain design system in CSS variables

**Option 2: Shopify + Tailwind**
- Use Shopify CLI with Tailwind support
- Keep Tailwind classes but compile separately

### 7. Font Integration

**Current:**
```typescript
import { Montserrat, Fredoka, Staatliches } from "next/font/google";
```

**Shopify:**
```liquid
<!-- In theme.liquid -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Fredoka:wght@400;500;600;700&family=Staatliches&display=swap" rel="stylesheet">
```

### 8. Image Assets

**Current:**
```typescript
<Image src="/logo/bekky-logo.jpg" />
```

**Shopify:**
```liquid
<img src="{{ 'bekky-logo.jpg' | asset_url }}" alt="Bekky Logo" />
```

Or use Shopify Files:
- Upload to Shopify Files
- Reference via `{{ 'files/bekky-logo.jpg' | file_url }}`

### 9. Navigation Updates

**Shopify Menu:**
- Create navigation menu in Shopify Admin
- Use `{{ linklists.main-menu.links }}` in header

**Current Navigation:**
```typescript
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  // ...
];
```

**Shopify:**
```liquid
{% for link in linklists.main-menu.links %}
  <a href="{{ link.url }}">{{ link.title }}</a>
{% endfor %}
```

### 10. Forms & Newsletter

**Newsletter:**
- Use Shopify's built-in newsletter signup
- Or integrate with email service (Klaviyo, Mailchimp)
- Use Shopify Customer API for signups

**Members Signup:**
- Use Shopify Customer Registration
- Create custom registration form
- Store additional data in metafields

### 11. Checkout Customization

**Options:**
- Use Shopify's native checkout (Shopify Plus for customization)
- Or use Shopify Checkout Extensions (Shopify Plus)
- Customize checkout UI to match neon theme

### 12. Performance Considerations

**Image Optimization:**
- Use Shopify's image filters: `{{ image | img_url: '400x400' }}`
- Implement lazy loading
- Use WebP format where possible

**JavaScript:**
- Minimize custom JavaScript
- Use Shopify's built-in features where possible
- Lazy load non-critical scripts

### 13. SEO & Meta Tags

**Current (Next.js):**
```typescript
export const metadata: Metadata = {
  title: "Bekky - Big Butt Association",
  // ...
};
```

**Shopify:**
```liquid
<title>{{ page_title }}{% if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif %}{% if current_page != 1 %} &ndash; Page {{ current_page }}{% endif %}{% unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless %}</title>
<meta name="description" content="{{ page_description | default: shop.description }}">
```

## Migration Checklist

### Phase 1: Setup
- [ ] Create Shopify development store
- [ ] Install Shopify CLI
- [ ] Initialize new theme or use existing
- [ ] Set up version control

### Phase 2: Structure
- [ ] Convert layout components (Header, Footer)
- [ ] Create Liquid templates for all pages
- [ ] Set up sections for homepage
- [ ] Create reusable snippets

### Phase 3: Styling
- [ ] Convert CSS (remove Tailwind or set up Tailwind for Shopify)
- [ ] Test all neon effects
- [ ] Verify responsive design
- [ ] Test animations

### Phase 4: Functionality
- [ ] Integrate Shopify products
- [ ] Set up cart functionality
- [ ] Create customer account pages
- [ ] Implement BekkyBucks system

### Phase 5: Content
- [ ] Migrate images to Shopify Files
- [ ] Set up navigation menus
- [ ] Configure blog structure
- [ ] Add product data

### Phase 6: Testing
- [ ] Test all pages
- [ ] Test cart functionality
- [ ] Test customer registration/login
- [ ] Test mobile responsiveness
- [ ] Test checkout flow

### Phase 7: Deployment
- [ ] Set up production theme
- [ ] Configure domain
- [ ] Set up SSL
- [ ] Launch!

## Key Shopify APIs & Features to Use

1. **Storefront API** - For product data, cart operations
2. **Admin API** - For customer metafields, webhooks
3. **Customer Accounts API** - For member features
4. **Metafields** - For BekkyBucks storage
5. **Webhooks** - For order processing and BekkyBucks calculation
6. **Liquid** - Template language for dynamic content

## BekkyBucks Implementation Details

### Storage
- Store balance in `customer.metafields.custom.bekkybucks_balance`
- Store transaction history in `customer.metafields.custom.bekkybucks_history` (JSON)

### Earning
- Webhook: `orders/create`
- Calculate: `Math.floor(order.total_price / 10)`
- Update via Admin API

### Redemption
- Create discount codes via Admin API
- Or use discount at checkout
- Deduct from balance

## Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Documentation](https://shopify.dev/docs/api/liquid)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- [Storefront API](https://shopify.dev/api/storefront)
- [Admin API](https://shopify.dev/api/admin)

## Notes

- This Next.js version serves as the design reference
- All styling and components should be preserved in Shopify conversion
- Maintain the muted neon aesthetic throughout
- Keep rounded text (Fredoka font) for display elements
- Ensure mobile-first responsive design is maintained

