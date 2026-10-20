import { useState } from 'react';
import { products, type Product } from '@/data/products';
import { Plus } from 'lucide-react';
import { baseUrl } from '@/utils/base';

const categories = ['All', 'Cake'] as const;

type Filter = (typeof categories)[number];

export default function Menu() {
  const [active, setActive] = useState<Filter>('All');

  const filtered =
    active === 'All'
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section id="menu" className="py-28 md:py-36 bg-espresso-900 text-cream-50 relative overflow-hidden">
      {/* Soft texture glow */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-crust-600/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-crust-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-script text-3xl text-cream-300 reveal">Made for your moment</p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl font-semibold reveal">
            Cakes worth celebrating
          </h2>
          <p className="mt-5 text-cream-200/80 leading-relaxed reveal">
            Choose a finished design for birthdays, milestones, and every sweet moment in between.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 reveal">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === c
                  ? 'bg-cream-50 text-crust-700'
                  : 'bg-cream-50/10 text-cream-100 hover:bg-cream-50/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((p: Product) => (
            <article
              key={p.id}
              className="group bg-espresso-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-cream-100/10 hover:border-crust-400/40 transition-all duration-500 hover:-translate-y-1 reveal"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                {p.tag && (
                  <span className="absolute top-4 left-4 rounded-full bg-cream-50 text-crust-700 text-xs font-medium px-3 py-1.5 tracking-wide">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl font-semibold text-cream-50 leading-tight">
                    {p.name}
                  </h3>
                  {p.price && (
                    <span className="font-serif text-xl text-cream-300 whitespace-nowrap">
                      {p.price}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-cream-200/70 leading-relaxed">
                  {p.description}
                </p>
                <a href={`${baseUrl}/visit`} className="mt-5 inline-flex items-center gap-2 text-sm text-cream-200 group/btn">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-crust-500 text-cream-50 transition-colors group-hover/btn:bg-crust-400">
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                  Add to order
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-cream-200/60 text-sm reveal">
          Custom designs and flavours are available by request.
        </p>
      </div>
    </section>
  );
}
