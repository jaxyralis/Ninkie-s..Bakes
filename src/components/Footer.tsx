import { Croissant, MapPin, Phone } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-200/70 pt-16 pb-8 border-t border-cream-100/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-cream-100/10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-crust-500 text-cream-50">
                <Croissant className="h-5 w-5" />
              </span>
              <span className="font-serif text-2xl font-semibold text-cream-50">
                Ninkie's Bakes
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Beautiful cakes and sweet treats made for your special moments.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream-50">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href={baseUrl} className="hover:text-cream-50 transition-colors">Home</a></li>
              <li><a href={`${baseUrl}cakes`} className="hover:text-cream-50 transition-colors">Cakes</a></li>
              <li><a href={`${baseUrl}visit`} className="hover:text-cream-50 transition-colors">Visit &amp; Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream-50">Find us</h4>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-crust-400" />53 Monokane Street, Pretoria, Gauteng, 0008, South Africa</p>
              <a href="tel:+27815798780" className="flex items-center gap-2.5 hover:text-cream-50 transition-colors"><Phone className="h-4 w-4 text-crust-400" />+27 81 579 8780</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream-200/50">
          <p>© {new Date().getFullYear()} Ninkie's Bakes. All rights reserved.</p>
          <p>Made with care for every celebration.</p>
        </div>
      </div>
    </footer>
  );
}
