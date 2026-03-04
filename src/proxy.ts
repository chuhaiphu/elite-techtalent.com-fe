import { Route } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const authCookie = request.cookies.get('atk');
  const isAuthenticated = !!authCookie?.value;

  if (searchParams.get('invalid') === '1') {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('atk');
    return response;
  }

  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  if (!isAuthenticated && pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config: { matcher: Route[] } = {
  matcher: ['/admin/:path*', '/login'],
};
