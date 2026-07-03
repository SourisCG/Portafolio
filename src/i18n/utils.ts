import { defaultLocale, locales, type Locale } from './index';

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && (locales as string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale;
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (clean === '') return `/${locale}/`;
  return `/${locale}/${clean}`.replace(/\/+$/, '/');
}

export function pathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && (locales as string[]).includes(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return '/' + segments.join('/');
}
