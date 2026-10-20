// Resolves a path against the app's base URL so links and assets work
// both at the root domain and on GitHub Pages project URLs (/repo/).
export const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${baseUrl}${path}`;
}
