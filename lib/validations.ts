import { z } from "zod";

/**
 * Generate Page Schema - for creating new pages with AI
 */
export const GeneratePageSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200),
  description: z.string().min(10, "Description must be at least 10 characters").max(1000),
  targetAudience: z.string().min(5, "Target audience must be at least 5 characters"),
  businessType: z.string().min(3, "Business type must be at least 3 characters"),
  templateId: z.string().optional(),
  primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color format").default("#6366F1"),
  fontFamily: z.enum(["display", "body", "mono"]).default("body"),
});

/**
 * Update Page Schema - for modifying existing pages
 */
export const UpdatePageSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200).optional(),
  slug: z.string().min(3).max(100).regex(/^[a-z0-9-]+$/, "Invalid slug format").optional(),
  metaTitle: z.string().max(60, "Meta title must be less than 60 characters").optional(),
  metaDesc: z.string().max(160, "Meta description must be less than 160 characters").optional(),
  primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, "Invalid color format").optional(),
  fontFamily: z.enum(["display", "body", "mono"]).optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
  contentJson: z.record(z.string(), z.any()).optional(),
});

/**
 * User Profile Schema - for user settings and profile updates
 */
export const UserProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100).optional(),
  username: z.string().min(3, "Username must be at least 3 characters").max(50).regex(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, hyphens, and underscores").optional(),
  email: z.string().email("Invalid email address"),
  plan: z.enum(["FREE", "STARTER", "PRO", "AGENCY"]).default("FREE"),
});

/**
 * Login Schema
 */
export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

/**
 * Sign Up Schema
 */
export const SignUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

/**
 * Contact Form Schema
 */
export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  subject: z.string().optional(),
});

/**
 * API response schema for type safety
 */
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
  error: z.string().optional(),
});
