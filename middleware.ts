import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";

// middleware from nex-auth will redirect user to sign in page if not login
export default middleware;

// // it is convention for export "middleware"
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/new-page', request.url))
// }

// it is convention for export "config"
// if you put '/users' inside the matcher, meaning middleware function will be 
// executed only you visit the url.
export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ['/users/:id*', '/passwords/edit']
}