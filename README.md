# Hotaru Landing Page

Landing page for Hotaru — "the shared clipboard that forgets after 2 hours".

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Framer Motion** for animations
- **Lucide Icons**
- **Supabase** (optional, for waitlist storage)

## Features

- ✅ Dark-first design with custom color palette
- ✅ Fully responsive layout
- ✅ WCAG AA accessibility compliance
- ✅ SEO optimized (metadata, OpenGraph, Twitter cards, sitemap)
- ✅ Performance optimized (Lighthouse 90+)
- ✅ Waitlist form with Supabase integration (optional)
- ✅ Rate limiting on API
- ✅ Smooth animations and micro-interactions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up Supabase:
   - Create a Supabase project
   - Create a `waitlist` table:
     ```sql
     CREATE TABLE waitlist (
       id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
       email TEXT UNIQUE NOT NULL,
       created_at TIMESTAMPTZ DEFAULT NOW()
     );
     ```
   - Copy `.env.example` to `.env.local` and add your Supabase credentials

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

If these are not set, the app will use in-memory storage for development (with console warnings).

## Project Structure

```
├── app/
│   ├── api/waitlist/     # Waitlist API endpoint
│   ├── privacy/          # Privacy policy page
│   ├── terms/            # Terms of service page
│   ├── success/          # Success page after signup
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   ├── sitemap.ts        # Sitemap generation
│   ├── robots.ts         # Robots.txt generation
│   └── opengraph-image.tsx # OpenGraph image
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── icons/            # Custom icons (firefly)
│   ├── navbar.tsx        # Navigation bar
│   ├── hero.tsx          # Hero section
│   ├── features.tsx      # Features section
│   ├── pricing.tsx       # Pricing section
│   ├── faq.tsx           # FAQ section
│   └── ...               # Other components
└── lib/
    └── utils.ts          # Utility functions
```

## Deployment

The project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables if using Supabase
4. Deploy!

## Color Palette

- Background: `#0B1220`
- Foreground: `#E6E9F2`
- Accent: `#FFD84D`
- Card: `#121A2B`
- Border: `#1B2437`

## License

MIT
