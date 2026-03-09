import { PlanType } from "@/types";

export interface PlanLimits {
  pages: number;
  customDomain: boolean;
  abTesting: boolean;
  analytics: boolean;
  seoOptimization: boolean;
  apiAccess: boolean;
  prioritySupport: boolean;
  advancedAi: boolean;
}

export const PLAN_LIMITS: Record<PlanType, PlanLimits> = {
  FREE: {
    pages: 1,
    customDomain: false,
    abTesting: false,
    analytics: true,
    seoOptimization: false,
    apiAccess: false,
    prioritySupport: false,
    advancedAi: false,
  },
  STARTER: {
    pages: 3,
    customDomain: false,
    abTesting: false,
    analytics: true,
    seoOptimization: true,
    apiAccess: false,
    prioritySupport: false,
    advancedAi: true,
  },
  PRO: {
    pages: 999,
    customDomain: true,
    abTesting: true,
    analytics: true,
    seoOptimization: true,
    apiAccess: true,
    prioritySupport: true,
    advancedAi: true,
  },
  AGENCY: {
    pages: 9999,
    customDomain: true,
    abTesting: true,
    analytics: true,
    seoOptimization: true,
    apiAccess: true,
    prioritySupport: true,
    advancedAi: true,
  },
};

/**
 * Check if user's plan supports a specific feature
 */
export function planSupportsFeature(plan: PlanType, feature: keyof PlanLimits): boolean {
  return PLAN_LIMITS[plan][feature] as boolean;
}

/**
 * Get plan limits for a specific plan
 */
export function getPlanLimits(plan: PlanType): PlanLimits {
  return PLAN_LIMITS[plan];
}

/**
 * Check if user can create more pages
 */
export function canCreateMorePages(plan: PlanType, currentPageCount: number): boolean {
  return currentPageCount < PLAN_LIMITS[plan].pages;
}

/**
 * Get remaining pages for a plan
 */
export function getRemainingPages(plan: PlanType, currentPageCount: number): number {
  return Math.max(0, PLAN_LIMITS[plan].pages - currentPageCount);
}
