import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

import { locales } from '@/translations/config';
import { getLocale } from '@/utils/locale';

const i18nMiddleware = async (request: any) => {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request, locales);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
};

export default clerkMiddleware((auth, request) => {
  const rootPathWithLocale = locales.map((locale) => `/${locale}`);
  const localePathsRegex = locales.map((locale) => `/${locale}`).join('|');

  const isPublicRoute = createRouteMatcher([
    '/',
    ...rootPathWithLocale,
    `(${localePathsRegex})*/error`,
  ]);

  if (!isPublicRoute(request)) {
    auth().protect();
  }

  return i18nMiddleware(request);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
