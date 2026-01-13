import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generates breadcrumbs from a path
 */
export function generateBreadcrumbs(path: string): { label: string; href: string }[] {
  const segments = path.split('/').filter(Boolean);

  return [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => ({
      label: segment.split('-').map(capitalize).join(' '),
      href: `/${segments.slice(0, index + 1).join('/')}`,
    })),
  ];
}

/**
 * Format a date string
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
