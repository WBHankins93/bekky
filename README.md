# 🦙 Bekky World - Community Platform

Welcome to **Bekky World**, the exclusive community platform for fans of Bekky, the purple llama! This is a members-only platform that integrates with Shopify to reward loyal fans with Bekky Bucks, festival content, and exclusive perks.

## 🎨 Project Overview

Bekky World is built for the community around **BekkyWithABigButt**, featuring:

- **Festival Adventures Blog** - Behind-the-scenes content, interviews, and event recaps
- **Photo Gallery** - Memorable moments from festivals and events
- **Bekky Bucks System** - Earn rewards based on Shopify purchases
- **Personalized Member Profiles** - Track your journey and achievements
- **Exclusive Community Features** - Connect with fellow Bekky fans

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Bekky theme
- **Fonts**: Poppins (body) & Fredoka (display)
- **Deployment**: TBD (Vercel recommended)
- **Future Integrations**:
  - Supabase (database & auth)
  - Shopify API (purchases & webhooks)
  - NextAuth.js (authentication)

## 🎨 Design System

### Color Palette

- **Primary Purple**: `#a855f7` (Bekky brand color)
- **Neon Accents**: Pink `#ff10f0`, Blue `#00f0ff`, Green `#39ff14`
- **Background**: Dark gradient (`#0a0a0f` to purple tones)
- **Festival/Rave Aesthetic**: High contrast, glowing effects, playful animations

### Typography

- **Display Font**: Fredoka (fun, rounded, festival-appropriate)
- **Body Font**: Poppins (clean, modern, readable)

## 📁 Project Structure

```
bekky/
├── app/
│   ├── layout.tsx           # Root layout with fonts & MainLayout
│   ├── page.tsx             # Homepage with intro animation
│   ├── blog/                # Festival adventures & blog posts
│   ├── gallery/             # Photo gallery
│   ├── account/             # Member profile page
│   └── bekky-bucks/         # Bekky Bucks dashboard
├── components/
│   ├── layout/              # Header, Footer, MainLayout
│   ├── ui/                  # Reusable UI components (future)
│   └── animations/          # IntroAnimation component
├── lib/                     # Utility functions (future)
├── types/                   # TypeScript type definitions (future)
└── public/                  # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd bekky
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Current Features

### Phase 1 - Foundation ✅

- [x] Next.js 15 setup with TypeScript
- [x] Tailwind CSS with custom Bekky theme
- [x] Responsive navigation with mobile menu
- [x] Intro animation on first visit
- [x] Homepage with feature cards
- [x] Basic page structure (Blog, Gallery, Account, Bekky Bucks)
- [x] Footer with branding and links
- [x] Mobile-first responsive design

## 🚧 Upcoming Features

### Phase 2 - Content & Features

- [ ] Authentication system (Shopify SSO or NextAuth)
- [ ] Blog CMS integration (Sanity or custom)
- [ ] Gallery image upload & management
- [ ] Bekky Bucks calculation logic
- [ ] Shopify webhook integration

### Phase 3 - Member Features

- [ ] Personalized member profiles
- [ ] Achievement badges system
- [ ] Bekky Bucks transaction history
- [ ] Redemption store
- [ ] Comments system for blog posts

### Phase 4 - Advanced Features

- [ ] Enhanced 3D intro animation (Three.js)
- [ ] Community forums
- [ ] Real-time notifications
- [ ] Mobile PWA support
- [ ] Analytics dashboard

## 🔐 Authentication Strategy (TBD)

Options being considered:

1. **Shopify Multipass** (requires Shopify Plus)
2. **Shopify Customer API + Magic Links**
3. **NextAuth with custom Shopify provider**

Decision pending client consultation.

## 💰 Bekky Bucks System (TBD)

- Earn rate: TBD (e.g., $1 = X Bekky Bucks)
- Redemption options: Exclusive merch, festival tickets, meet & greets
- Integration: Shopify webhooks → Supabase → User balance

## 📱 Mobile Optimization

The entire platform is built **mobile-first** to ensure optimal experience on phones:

- Responsive breakpoints at `sm`, `md`, `lg`, `xl`
- Touch-friendly navigation
- Optimized font sizes for readability
- Swipe-friendly gallery (future)
- PWA capabilities (future)

## 🎨 Branding

- **Character**: Bekky - a purple llama plush with a big personality
- **Community**: @bekkywithabigbutt on Instagram
- **Vibe**: Festival energy, quirky, fun, inclusive
- **Target Audience**: EDM festival-goers, plush collectors, community supporters

## 🤝 Contributing

This is a private client project. For internal development only.

## 📄 License

Proprietary - All rights reserved by the Bekky brand owner.

---

Built with 💜 for the Bekky community | 🦙 Purple Llama Forever
