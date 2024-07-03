import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

import { locales } from '@/translations/config';
const publicRoutes = [
  '/',
  '/auth/signin(.*)',
  '/auth/signout(.*)',
  '/auth/register(.*)',
  '/error',
];
const publicRoutesWithLocales = publicRoutes.reduce(
  (acc: string[], route: string) => {
    acc.push(route);
    // remove trailing slash
    acc.push(`/:locale${route}`.replace(/\/$/, ''));
    return acc;
  },
  [],
);
const isPublicRoute = createRouteMatcher(publicRoutesWithLocales);

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
