import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

import { locales } from '@/translations/config';

const rootPathWithLocale = locales.map((locale) => `/${locale}`);
const localePathsRegex = locales.map((locale) => `/${locale}`).join('|');
const isPublicRoute = createRouteMatcher([
  '/',
  ...rootPathWithLocale,
  `(${localePathsRegex})*/error`,
]);

const i18nMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
});

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }

  return i18nMiddleware(request);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
