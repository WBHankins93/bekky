# Gallery Page Template Assignment Fix

## Issue
The Gallery page is showing the Members signup content instead of the gallery content. This is a template assignment issue in Shopify Admin.

## Solution
You need to manually assign the correct template to the Gallery page in Shopify Admin:

1. Go to **Shopify Admin** > **Online Store** > **Pages**
2. Find the **"Gallery"** page (or create it if it doesn't exist)
3. Click on the Gallery page to edit it
4. In the **Template** dropdown (usually at the bottom of the page editor), select **`page.gallery`**
5. Click **Save**

## If the Gallery Page Doesn't Exist
If you don't see a Gallery page, you can create it:

1. Go to **Shopify Admin** > **Online Store** > **Pages**
2. Click **Add page**
3. Set the **Title** to "Gallery"
4. Set the **Handle** to "gallery" (this is important for the URL `/pages/gallery`)
5. In the **Template** dropdown, select **`page.gallery`**
6. Leave the **Content** field empty (the template handles all the content)
7. Click **Save**

## Verification
After assigning the template, visit `/pages/gallery` on your store. You should see:
- Title: "Bekky in the Wild"
- Description: "Coming soon: Photos from festivals, events, and adventures!"

If you still see the Members signup content, try:
- Hard refreshing your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Clearing your browser cache
- Waiting a few minutes for Shopify's CDN to update

