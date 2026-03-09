# PageForge - AI-Powered Landing Page Builder

## Project Scaffold Complete ✅

This is a fully configured Next.js 14 application with TypeScript, Tailwind CSS, and all necessary dependencies installed.

### What's Included

✅ **Core Framework**
- Next.js 14 with App Router
- React 18
- TypeScript with strict mode
- ESLint configuration

✅ **Styling & Design System**
- Tailwind CSS with full custom design system
- Google Fonts (Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono)
- Complete CSS custom properties for colors, spacing, shadows, easing
- Pre-defined animations (shimmer, float, pulse-glow, marquee)

✅ **Backend & Database**
- Prisma ORM (v5) with PostgreSQL schema
- Supabase authentication helpers
- Singleton Prisma client with connection pooling

✅ **Frontend Components**
- UI Component Library (Button, Card, Input, Skeleton, EmptyState, ConfirmModal)
- QueryProvider (TanStack React Query with 60s staleTime)
- ToastProvider (Sonner with dark theme)

✅ **Utilities & Validation**
- Zod schemas for form validation
- TypeScript interfaces for all domain models
- Utility functions (cn, slugify, truncate, etc.)
- Plan limits and feature gates

✅ **Middleware & Auth**
- Request middleware for session checking
- Route protection for `/dashboard`, `/editor`, `/analytics`, `/settings`, `/admin`
- Admin-only routes with email verification

### Environment Variables

Create a `.env.local` file with the following:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Database
DATABASE_URL=your_database_url

# Stripe (Optional)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Anthropic
ANTHROPIC_API_KEY=your_anthropic_api_key

# Resend (Email)
RESEND_API_KEY=your_resend_api_key

# Sentry (Error Tracking)
NEXT_PUBLIC_SENTRY_AUTH_TOKEN=your_sentry_auth_token

# Admin Configuration
ADMIN_EMAILS=admin@example.com

# Feature Flags
NEXT_PUBLIC_ENABLE_AI_GENERATION=true
```

### Getting Started

1. **Install Dependencies** (Already Done)
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   - Copy `.env.local` and fill in your credentials

3. **Set Up Database**
   ```bash
   npx prisma db push
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:3000 to view the app

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint
```

### Project Structure

```
pageforge/
├── app/                    # App Router pages and layouts
├── components/
│   ├── providers/         # React providers (Query, Toast)
│   └── ui/                # UI components
├── lib/
│   ├── supabase/          # Supabase clients (browser & server)
│   ├── utils.ts           # Utility functions
│   ├── validations.ts     # Zod schemas
│   ├── prisma.ts          # Prisma singleton
│   └── planLimits.ts      # Feature gate definitions
├── types/
│   └── index.ts           # TypeScript interfaces
├── prisma/
│   └── schema.prisma      # Database schema
├── middleware.ts          # Auth middleware
├── tailwind.config.ts     # Tailwind design system
├── tsconfig.json          # TypeScript config
└── .env.local             # Environment variables
```

### Next Steps

1. **Connect Supabase**
   - Create a Supabase project
   - Get your URL and Anon Key
   - Update `.env.local`

2. **Set Up Database**
   - Create a PostgreSQL database
   - Run `npx prisma db push`

3. **Start Building Features**
   - Create authentication pages
   - Build dashboard components
   - Implement page builder UI
   - Wire up API routes

### Verification Checklist

- ✅ Project initializes with no errors
- ✅ All dependencies installed
- ✅ TypeScript compilation passes
- ✅ Fonts load from Google Fonts
- ✅ Design system CSS variables defined
- ✅ Prisma client generates
- ✅ Middleware configured for auth
- ✅ UI components built and exportable
- ✅ Home page renders with proper styling

### Technology Stack

- **Runtime**: Node.js
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL + Prisma
- **Auth**: Supabase
- **Payments**: Stripe
- **AI**: Anthropic Claude
- **Email**: Resend
- **Query**: TanStack React Query
- **Forms**: React Hook Form + Zod
- **UI System**: Custom design tokens + CVA
- **Monitoring**: Sentry
- **OG Images**: Vercel OG

---

Ready to start building! 🚀
