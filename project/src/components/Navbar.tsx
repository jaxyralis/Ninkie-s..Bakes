import { useEffect, useState } from 'react';
import { Menu, X, Croissant } from 'lucide-react';
import { baseUrl } from '@/utils/base';

const links = [
  { label: 'Home', href: `${baseUrl}/` },
  { label: 'Cakes', href: `${baseUrl}/cakes` },
  { label: 'Gallery', href: `${baseUrl}/#gallery` },
  { label: 'Visit', href: `${baseUrl}/visit` },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = !window.location.pathname.endsWith('/cakes') && !window.location.pathname.endsWith('/visit');
  const solidHeader = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solidHeader
          ? 'bg-cream-50/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href={`${baseUrl}/`} className="flex items-center gap-2.5 group">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              solidHeader ? 'bg-crust-500 text-cream-50' : 'bg-cream-50/90 text-crust-700'
            }`}
          >
            <Croissant className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-serif text-2xl font-semibold transition-colors ${
                solidHeader ? 'text-espresso-800' : 'text-cream-50'
              }`}
            >
              Ninkie's Bakes
            </span>
            <span
              className={`block text-[10px] uppercase tracking-[0.28em] transition-colors ${
                solidHeader ? 'text-crust-500' : 'text-cream-200'
              }`}
            >
              Artisan Bakery
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-crust-500 after:transition-all after:duration-300 hover:after:w-full ${
                  solidHeader
                    ? 'text-espresso-700 hover:text-crust-600 after:w-0'
                    : 'text-cream-100 hover:text-white after:w-0'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`${baseUrl}/visit`}
          className={`hidden md:inline-flex rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            solidHeader
              ? 'bg-crust-600 text-cream-50 hover:bg-crust-700'
              : 'bg-cream-50 text-crust-700 hover:bg-cream-100'
          }`}
        >
          WhatsApp Us
        </a>

        <button
          className={`md:hidden ${solidHeader ? 'text-espresso-800' : 'text-cream-50'}`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out bg-cream-50 ${
          open ? 'max-h-96 mt-3 border-t border-cream-200' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-espresso-800 text-lg font-serif border-b border-cream-200/60 last:border-0"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`${baseUrl}/visit`}
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-crust-600 text-cream-50 text-center py-3 font-medium"
            >
              WhatsApp Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
