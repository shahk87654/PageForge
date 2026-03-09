# PageForge - Project Documentation

## Project Overview

**PageForge** is an AI-powered landing page builder built with Next.js 14. It enables users to create stunning, high-converting landing pages without design experience, powered by Claude AI via Anthropic.

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: Supabase Auth
- **AI**: Anthropic Claude API
- **Payments**: Stripe
- **Email**: Resend
- **Query Management**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Custom CVA-based component library
- **Monitoring**: Sentry

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles + design system
│   └── (routes)/            # Feature routes (dashboard, editor, etc.)
├── components/
│   ├── providers/           # React context providers
│   │   ├── QueryProvider.tsx
│   │   └── ToastProvider.tsx
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Skeleton.tsx
│       ├── EmptyState.tsx
│       └── ConfirmModal.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts        # Browser Supabase client
│   │   └── server.ts        # Server Supabase client
│   ├── utils.ts             # Utility functions
│   ├── validations.ts       # Zod schemas for validation
│   ├── prisma.ts            # Prisma client singleton
│   └── planLimits.ts        # Feature gates by plan
├── types/
│   └── index.ts             # TypeScript interfaces
├── prisma/
│   └── schema.prisma        # Database schema
├── middleware.ts            # Auth & route protection
├── tailwind.config.ts       # Tailwind customization
├── tsconfig.json            # TypeScript config
├── next.config.ts           # Next.js config
├── package.json             # Dependencies
└── .env.local               # Environment variables (not in repo)
```

## Key Files

### Configuration Files
- **tailwind.config.ts**: Extends Tailwind with 600+ custom tokens
- **tsconfig.json**: Strict TypeScript mode enabled
- **next.config.ts**: Next.js configuration
- **eslint.config.mjs**: ESLint rules

### Core Application Files
- **app/layout.tsx**: Wraps app with QueryProvider and ToastProvider
- **app/globals.css**: Google Fonts imports + CSS custom properties
- **middleware.ts**: Supabase session check + route protection

### Libraries
- **lib/utils.ts**: Helper functions (cn, slugify, formatNumber, etc.)
- **lib/validations.ts**: Zod schemas for all forms
- **lib/prisma.ts**: Prisma client with pooling
- **lib/planLimits.ts**: Feature gates for each subscription tier

### Database
- **prisma/schema.prisma**: User, Page, Subscription, Analytics, Template models

## Design System

### Colors (CSS Custom Properties)
- **Primary**: Indigo (#6366F1)
- **Secondary**: Violet (#8B5CF6)
- **Accents**: Cyan, Emerald, Rose, Amber (full palettes)
- **Neutral**: Slate 50-900 + Ink + White

### Typography
- **Display**: Bricolage Grotesque (400, 700, 800)
- **Body**: Plus Jakarta Sans (400, 500, 600)
- **Mono**: JetBrains Mono (400, 500)

### Spacing
- Scale from `--space-1` (0.25rem) to `--space-32` (8rem)

### Animations
- **shimmer**: Background gradient animation (2s)
- **float**: Vertical bob animation (3s)
- **pulse-glow**: Glow pulse effect (2s)
- **marquee**: Horizontal scroll animation (20s)

## Data Models

### User
- email, name, username, plan (FREE/STARTER/PRO/AGENCY)
- Stripe integration (customerId, subId)
- Trial dates, onboarding status

### Page
- userId, title, slug, status (DRAFT/PUBLISHED/ARCHIVED)
- Content (JSON), metadata, colors, fonts
- Analytics (visits, conversions, publishedAt)

### Analytics
- pageId, userId, visitorHash
- Referrer, country, device, CTAclick
- Duration, timestamp

### Subscription
- userId, plan, stripeSubId, status
- Billing period dates, cancellation

### Plan Limits
```
FREE:     1 page, no custom domain, no A/B testing
STARTER:  3 pages, no custom domain
PRO:      999 pages, custom domain, A/B testing, analytics
AGENCY:   9999 pages, all features
```

## Authentication Flow

1. **Public Routes**: `/`, `/login`, `/signup` - no auth required
2. **Protected Routes**: `/dashboard`, `/editor`, `/analytics`, `/settings` - require auth
3. **Admin Routes**: `/admin/*` - require auth + admin email
4. **Middleware**: Checks session on every request, redirects to `/login?redirect=[path]`

## Environment Variables

**Required**:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase public key

**Optional**:
- `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Payment processing
- `ANTHROPIC_API_KEY` - AI page generation
- `RESEND_API_KEY` - Email sending
- `NEXT_PUBLIC_SENTRY_AUTH_TOKEN` - Error tracking
- `ADMIN_EMAILS` - Comma-separated admin email list

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Database operations
npx prisma db push          # Sync schema
npx prisma generate        # Generate client
npx prisma studio          # Open Prisma Studio
```

## Important Notes for Future Development

1. **Database Setup Required**: Users must provide `DATABASE_URL` and set up PostgreSQL
2. **Environment Variables**: All API keys must be configured in `.env.local`
3. **Prisma Migrations**: Run `npx prisma db push` before first dev server start
4. **Supabase Auth**: Auth helpers require Supabase project setup
5. **Stripe Webhook**: Need to configure webhook for subscription events
6. **TypeScript Strict Mode**: All new code must pass strict type checking

## Code Standards

- **TypeScript**: Strict mode required, no `any` types
- **Components**: Use `"use client"` for interactive components
- **Styling**: Use Tailwind + CSS custom properties
- **Validation**: Use Zod for all user input
- **Error Handling**: Use Sentry for production errors
- **Toast Messages**: Use Sonner (already configured)
- **Loading States**: Show spinners with Button `loading` prop

## Feature Implementation Order

1. **Authentication** - Supabase login/signup
2. **User Dashboard** - Page listing, creation
3. **Page Editor** - UI builder interface
4. **AI Generation** - Claude API integration for page content
5. **Page Publishing** - Publishing and domain handling
6. **Analytics** - Visitor tracking and metrics
7. **Payments** - Stripe subscription management
8. **Admin Panel** - User management and analytics

## Deployment Checklist

- [ ] All environment variables set in `.env.production`
- [ ] Database URL points to production PostgreSQL
- [ ] Supabase project configured for production
- [ ] Stripe keys updated to production keys
- [ ] Sentry project created and token set
- [ ] Email provider (Resend) configured
- [ ] Next.js build succeeds without errors
- [ ] Vercel/deployment platform configured
- [ ] Custom domain DNS configured
- [ ] SSL certificate enabled

## Useful Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Prisma Docs](https://www.prisma.io/docs)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Zod Validation](https://zod.dev)
- [Anthropic Claude API](https://console.anthropic.com)
- [Stripe API](https://stripe.com/docs/api)

---

**Last Updated**: March 2024
**Framework Version**: Next.js 14
**Node Version**: 18+
