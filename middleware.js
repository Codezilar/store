import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    // Redirect authenticated users away from auth pages
    if (token && (pathname.startsWith('/auth/signin') || pathname.startsWith('/auth/signup'))) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Check if user is trying to access dashboard routes
    if (pathname.startsWith('/dashboard')) {
      // If no token or user is not admin, redirect to home
      if (!token || token.role !== 'admin') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // This is required for withAuth to work, but we handle the logic above
        return true; // Allow all requests, we handle redirection manually
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/signin',
    '/auth/signup'
  ]
};