/**
 * Resolves a public asset path against Vite's BASE_URL.
 * This is crucial for GitHub Pages where the site is served from a subpath (e.g. /techboloy-website/).
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  
  // Data URLs, blob URLs, and external http(s) URLs are absolute and should not be modified
  if (
    path.startsWith('data:') ||
    path.startsWith('blob:') ||
    path.startsWith('http://') ||
    path.startsWith('https://')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  
  return `${normalizedBase}${cleanPath}`;
}
