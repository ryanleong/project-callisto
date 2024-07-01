import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const getLocale = (request: any, locales: string[]) => {
  const headers = { 'accept-language': request.headers.get('accept-language') };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = locales[0];

  return match(languages, locales, defaultLocale); // -> 'en-US'
};
