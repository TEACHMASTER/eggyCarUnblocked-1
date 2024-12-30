import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { locales } from './i18n/config';
 
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: "as-needed",
  localeDetection: false,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)']
};  