import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// GitHub Pages SPA redirect: 404.html encodes the requested path as ?/...
// Convert it back to a real pathname so the router can handle it.
(function restorePath() {
  const search = window.location.search;
  const marker = search.indexOf('?/');
  if (marker !== -1) {
    const encoded = search.slice(marker + 2).replace(/~and~/g, '&');
    const [path, query = ''] = encoded.split('?');
    const searchParams = query ? `?${query}` : '';
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}${path}${searchParams}${window.location.hash}`
    );
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
