import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase/server";

const protectedRoutes = ["/dashboard", "/editor", "/analytics", "/settings", "/admin"];
const adminEmails = (process.env.ADMIN_EMAILS || "").split(",").map(email => email.trim());

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  
  if (isProtectedRoute) {
    try {
      const supabase = await createServerClient();
      const { data: { session } } = await supabase.auth.getSession();

      // Redirect to login if no session
      if (!session) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
      }

      // Check admin access for /admin routes
      if (pathname.startsWith("/admin")) {
        const userEmail = session.user?.email;
        if (!userEmail || !adminEmails.includes(userEmail)) {
          return NextResponse.redirect(new URL("/", request.url));
        }
      }
    } catch (error) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
