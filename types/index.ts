/**
 * Plan type enumeration
 */
export enum PlanType {
  FREE = "FREE",
  STARTER = "STARTER",
  PRO = "PRO",
  AGENCY = "AGENCY",
}

/**
 * Page status enumeration
 */
export enum PageStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED = "ARCHIVED",
}

/**
 * Device type enumeration
 */
export enum DeviceType {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

/**
 * Generated Page Content Interface
 */
export interface GeneratedPageContent {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaLink?: string;
    backgroundImage?: string;
  };
  socialProof: {
    text: string;
    count?: number;
    metric?: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    quote: string;
    author: string;
    role?: string;
    company?: string;
    image?: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  finalCta: {
    headline: string;
    description: string;
    ctaText: string;
    ctaLink?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}

/**
 * User Interface
 */
export interface User {
  id: string;
  email: string;
  name: string | null;
  username: string | null;
  plan: PlanType;
  stripeCustomerId: string | null;
  stripeSubId: string | null;
  trialEndsAt: Date | null;
  onboardingCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Page Interface
 */
export interface Page {
  id: string;
  userId: string;
  title: string;
  slug: string;
  status: PageStatus;
  templateId: string | null;
  contentJson: GeneratedPageContent | null;
  metaTitle: string | null;
  metaDesc: string | null;
  primaryColor: string;
  fontFamily: "display" | "body" | "mono";
  visits: number;
  conversions: number;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Template Interface
 */
export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string | null;
  category: string;
  isDefault: boolean;
  createdAt: Date;
}

/**
 * Analytics Interface
 */
export interface Analytics {
  id: string;
  pageId: string;
  visitorHash: string;
  referrer: string | null;
  country: string | null;
  device: DeviceType;
  clickedCta: boolean;
  duration: number;
  createdAt: Date;
}

/**
 * Subscription Interface
 */
export interface Subscription {
  id: string;
  userId: string;
  plan: PlanType;
  stripeSubId: string;
  status: "active" | "paused" | "cancelled";
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelledAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * API Response Interface
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

/**
 * Session User Interface
 */
export interface SessionUser {
  id: string;
  email: string | null;
  name: string | null;
}

/**
 * Pagination Interface
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

/**
 * Pagination Response Interface
 */
export interface PaginationResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}
