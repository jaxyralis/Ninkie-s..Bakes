import { useEffect, useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { heroImages } from '@/data/products';
import { baseUrl } from '@/utils/base';

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <img
              src={src}
              alt="Hand-decorated celebration cake"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="font-script text-3xl md:text-4xl text-cream-300 mb-4 animate-fade-in">
            Made sweet for your moments
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-cream-50 leading-[1.05] text-balance animate-fade-up">
            Cakes made with<br />
            <span className="italic text-cream-200">heart</span> and detail.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-cream-100/90 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Ninkie's Bakes creates beautiful celebration cakes and sweet treats for
            birthdays, milestones, and the moments you want to remember.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={`${baseUrl}/cakes`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 text-crust-700 px-7 py-4 font-medium hover:bg-cream-100 transition-all hover:gap-3"
            >
              Explore the cakes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`${baseUrl}/visit`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 text-cream-50 px-7 py-4 font-medium hover:bg-cream-50/10 transition-colors"
            >
              Order for your moment
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 text-cream-200/90 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Clock className="h-5 w-5" />
            <span className="text-sm tracking-wide">Monday – Saturday · 9am – 6pm</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="h-12 w-px bg-cream-200/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-4 w-px bg-cream-100 animate-[float_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
