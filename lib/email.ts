import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  try {
    const result = await resend.emails.send({
      from: "PageForge <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to PageForge! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Plus Jakarta Sans', sans-serif; color: #060b18; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px; border-radius: 12px; color: white; text-align: center; margin-bottom: 20px; }
              .content { padding: 20px 0; line-height: 1.6; }
              .cta { display: inline-block; background: #6366f1; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin: 20px 0; font-weight: 600; }
              .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 40px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to PageForge ⚡</h1>
              </div>
              <div class="content">
                <p>Hi there!</p>
                <p>Thanks for joining the waitlist! You're about to experience the fastest way to create AI-powered landing pages.</p>
                <p>Your landing page will be live in 60 seconds. No design experience needed.</p>
                <a href="https://pageforge.dev/signup" class="cta">Get Started Free →</a>
                <p style="color: #9ca3af; font-size: 14px;">14-day free trial • No credit card required</p>
              </div>
              <div class="footer">
                <p>&copy; 2024 PageForge. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (result.error) {
      throw new Error(result.error.message || "Failed to send email");
    }

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("Failed to send welcome email:", error);
    throw error;
  }
}

export async function sendNotificationEmail(email: string, subject: string, htmlContent: string) {
  try {
    const result = await resend.emails.send({
      from: "PageForge <onboarding@resend.dev>",
      to: email,
      subject,
      html: htmlContent,
    });

    if (result.error) {
      throw new Error(result.error.message || "Failed to send email");
    }

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("Failed to send notification email:", error);
    throw error;
  }
}
