#!/usr/bin/env node
/**
 * Shopify Pages Creation Script (Admin API)
 * Creates all required pages for Big Butt Association theme
 * 
 * Prerequisites:
 * - Shopify Admin API access token
 * - Store URL
 * 
 * Usage:
 *   SHOPIFY_STORE=zkq0gh-tg.myshopify.com SHOPIFY_TOKEN=your_token node scripts/create-pages-api.js
 * 
 * Or set up .env file:
 *   SHOPIFY_STORE=zkq0gh-tg.myshopify.com
 *   SHOPIFY_TOKEN=your_admin_api_token
 */

require('dotenv').config();

const pages = [
  {
    title: 'About',
    handle: 'about',
    template_suffix: 'about',
    body_html: '', // Template handles all content - no body needed
    published: true,
    note: 'Template (page.about.liquid) contains all content - body_html is ignored'
  },
  {
    title: 'Members',
    handle: 'members',
    template_suffix: 'members',
    body_html: '', // Template handles all content - no body needed
    published: true,
    note: 'Template (page.members.liquid) contains all content - body_html is ignored'
  },
  {
    title: 'Gallery',
    handle: 'gallery',
    template_suffix: null,
    body_html: '<p>Check out our festival photos and community highlights!</p>',
    published: true,
    note: 'Uses generic page template - you can edit this content in Shopify Admin'
  },
  {
    title: 'Blog',
    handle: 'blog',
    template_suffix: null,
    body_html: '<p>Stay updated with the latest from Big Butt Association!</p>',
    published: true,
    note: 'Uses generic page template - you can edit this content in Shopify Admin'
  },
  {
    title: 'Shop',
    handle: 'shop',
    template_suffix: 'shop',
    body_html: '', // Template handles all content - no body needed
    published: true,
    note: 'Template (page.shop.liquid) contains all content - displays all products from collections'
  }
];

const store = process.env.SHOPIFY_STORE || 'zkq0gh-tg.myshopify.com';
const token = process.env.SHOPIFY_TOKEN;

if (!token) {
  console.log('❌ Shopify Admin API token not found!');
  console.log('\nTo use this script:');
  console.log('1. Create a Private App in Shopify Admin:');
  console.log('   Settings > Apps and sales channels > Develop apps > Create an app');
  console.log('2. Enable "Read and write" access to "Online Store > Pages"');
  console.log('3. Install the app and copy the Admin API access token');
  console.log('4. Set environment variable:');
  console.log('   export SHOPIFY_TOKEN=your_token_here');
  console.log('   export SHOPIFY_STORE=zkq0gh-tg.myshopify.com');
  console.log('5. Run: node scripts/create-pages-api.js');
  console.log('\nOr create pages manually (easier):');
  console.log('   See PAGE_SETUP_GUIDE.md for step-by-step instructions');
  process.exit(1);
}

async function createPage(pageData) {
  const url = `https://${store}/admin/api/2024-01/pages.json`;
  
  const pagePayload = {
    page: {
      title: pageData.title,
      handle: pageData.handle,
      body_html: pageData.body_html,
      published: pageData.published,
      template_suffix: pageData.template_suffix
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token
      },
      body: JSON.stringify(pagePayload)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP ${response.status}: ${error}`);
    }

    const data = await response.json();
    return data.page;
  } catch (error) {
    console.error(`❌ Error creating ${pageData.title}:`, error.message);
    return null;
  }
}

async function checkPageExists(handle) {
  const url = `https://${store}/admin/api/2024-01/pages.json?handle=${handle}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Shopify-Access-Token': token
      }
    });

    if (!response.ok) return false;
    
    const data = await response.json();
    return data.pages && data.pages.length > 0;
  } catch (error) {
    return false;
  }
}

async function main() {
  console.log('📄 Creating Shopify Pages for Big Butt Association');
  console.log('==================================================\n');
  console.log(`Store: ${store}\n`);

  for (const page of pages) {
    console.log(`Checking ${page.title}...`);
    
    const exists = await checkPageExists(page.handle);
    if (exists) {
      console.log(`✅ ${page.title} already exists (skipping)\n`);
      continue;
    }

    console.log(`Creating ${page.title}...`);
    const created = await createPage(page);
    
    if (created) {
      console.log(`✅ Created: ${page.title}`);
      console.log(`   URL: /pages/${page.handle}`);
      console.log(`   Template: ${page.template_suffix ? `page.${page.template_suffix}` : 'page'}`);
      if (page.note) {
        console.log(`   Note: ${page.note}`);
      }
      console.log('');
    } else {
      console.log(`❌ Failed to create ${page.title}\n`);
    }
  }

  console.log('\n✅ Done!');
  console.log('\n📝 Important Notes:');
  console.log('1. About & Members pages: Templates contain ALL content - page body is ignored');
  console.log('2. Gallery & Blog pages: Use generic template - you can edit content in Shopify Admin');
  console.log('3. Verify templates: Go to Shopify Admin > Online Store > Pages');
  console.log('   - About page should use template "page.about"');
  console.log('   - Members page should use template "page.members"');
  console.log('   - Gallery & Blog use template "page" (generic)');
}

main().catch(console.error);

