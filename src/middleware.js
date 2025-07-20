import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

export function middleware(request) {
  console.log(request.headers.get("user-agent"));
  console.log(request.nextUrl.pathname);

  const token = request.cookies.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  //   console.log("response111111111111111111", NextResponse);
  return NextResponse.next();
}

export const config = {
  matcher: ["/us/:path*", "/blog"]
};
