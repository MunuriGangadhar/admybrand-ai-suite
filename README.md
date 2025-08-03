# ADmyBRAND AI Suite Landing Page

Welcome to the **ADmyBRAND AI Suite** project! This is a fictional AI-powered marketing tool's landing page built with modern web technologies. It features a stunning, responsive design incorporating 2025 trends like glassmorphism, subtle animations, and premium typography. The app includes core sections (Hero, Features, Pricing, Testimonials, FAQ, Footer), extras (interactive pricing calculator, demo animation, blog/resources), and a reusable component library.

This README provides setup instructions, a feature overview, and usage tips. The project is built with **Next.js 14+**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for a fast, optimized experience.

## Features Overview

### Core Landing Page Sections
- **Hero Section**: Compelling headline, subtext, CTA button, and a hero image/video with glassmorphism overlay for a premium feel.
- **Features Section**: Displays 6+ features with icons, descriptions, and on-scroll fade-in animations.
- **Pricing Cards**: 3 tiers with feature comparisons, glassmorphism styling, and an interactive pricing calculator modal.
- **Testimonials Carousel**: Enhanced carousel with customer reviews, photos, roles, smooth slide animations, and navigation buttons.
- **FAQ Section**: Searchable, categorized accordions with icons, images, and subtle transitions for better usability.
- **Blog & Resources Section**: Dynamic grid with thumbnails, category filters, search bar, hover effects, and glassmorphism cards.
- **Footer**: Links, social media icons, and contact info.
- **Contact Form**: Validated form handling with React Hook Form.
- **Demo Video/Animation**: Embedded video with scale-in animation.

### UI/UX Highlights
- **2025 Design Trends**: Glassmorphism (translucent blurred elements), modern sans-serif typography (Inter font), subtle Framer Motion animations (fade-ins, hovers, transitions).
- **Responsiveness**: Mobile-first design using Tailwind's responsive utilities—flawless on all devices.
- **Performance**: Image optimization via Next.js ``, fast loading, and efficient animations.

### Reusable Component Library (8+ Components)
- Button, Card, Modal, Accordion, Carousel, Input, PricingCalculator, DemoAnimation.
- These are modular, TypeScript-typed, and styled with Tailwind for easy reuse.

### Technical Stack
- **Framework**: Next.js 14+ with App Router and TypeScript.
- **Styling**: Tailwind CSS for rapid, responsive development.
- **Animations**: Framer Motion for smooth, performant effects.
- **Form Handling**: React Hook Form with validation.
- **Icons**: React Icons for features and navigation.
- **Utilities**: Clsx for conditional classes.

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended).
- npm, yarn, or pnpm (npm used in examples).

### Installation
1. **Create the Project**:
   ```
   npx create-next-app@latest admybrand-ai-suite --typescript --eslint --app --src-dir --import-alias "@/*"
   ```
   - Select "Yes" for src directory, App Router, and custom import alias `@/*`.

2. **Navigate to the Folder**:
   ```
   cd admybrand-ai-suite
   ```

3. **Install Dependencies**:
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install framer-motion react-hook-form react-icons clsx
   ```

4. **Add Assets**:
   - Place images (e.g., hero.jpg, blog1.jpg, customer photos) in `src/public/`.
   - For the demo video, update the YouTube embed URL in `DemoAnimation.tsx`.

5. **Run the Development Server**:
   ```
   npm run dev
   ```
   - Visit `http://localhost:3000` in your browser.

6. **Build for Production**:
   ```
   npm run build
   npm start
   ```

### Folder Structure Overview
```
admybrand-ai-suite/
├── src/
│   ├── app/                  # Pages and layouts
│   ├── components/           # Sections and UI library
│   │   ├── ui/               # Reusable components (Button, Card, etc.)
│   │   └── ...               # Section components (Hero, Features, etc.)
│   └── public/               # Static assets (images, icons)
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies
└── README.md                 # This file
```

## Usage Tips
- **Customization**: Edit section data (e.g., features, testimonials) directly in their `.tsx` files.
- **Testing Responsiveness**: Use browser dev tools to simulate devices—everything is mobile-first.
- **Adding Content**: Expand arrays like `features`, `testimonials`, or `resources` with real data.
- **Deployment**: Deploy to Vercel (ideal for Next.js) or any Node.js host. Ensure environment variables if needed.
- **Troubleshooting**: If animations lag, reduce complexity in Framer Motion props. For form submission, integrate a backend (e.g., via API route).

If you encounter issues or need expansions, refer to the official docs for Next.js, Tailwind, or Framer Motion. Happy building! 🚀