import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendWelcomeEmail } from "@/lib/email";

// Validation schema
const WaitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const result = WaitlistSchema.safeParse(body);
    if (!result.success) {
      const errorMessage = result.error.issues[0]?.message || "Invalid input";
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 400 }
      );
    }

    const { email } = result.data;

    // Upsert email in waitlist (handle duplicates gracefully)
    const waitlistEntry = await prisma.waitlist.upsert({
      where: { email },
      update: {
        source: "waitlist",
        createdAt: new Date(),
      },
      create: {
        email,
        source: "waitlist",
      },
    });

    // Send welcome email
    try {
      await sendWelcomeEmail(email);
    } catch (emailError) {
      console.error("Email sending failed, but waitlist entry created:", emailError);
      // Don't fail the request if email fails - user is still added to waitlist
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
        email: waitlistEntry.email,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
