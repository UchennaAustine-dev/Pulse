import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Create a new response
  const response = NextResponse.next();

  // Remove headers that might reveal VPN usage
  response.headers.delete("x-forwarded-for");
  response.headers.delete("via");

  // Normalize other headers that might be used for fingerprinting
  response.headers.set("accept-language", "en-US,en;q=0.9");

  return response;
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
