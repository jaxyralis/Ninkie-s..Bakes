import { galleryImages } from '@/data/products';

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-36 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-script text-3xl text-crust-500 reveal">Made for your moments</p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl font-semibold text-espresso-900 reveal">
            Sweet details, beautifully made
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl reveal group ${
                i === 0 ? 'row-span-2 h-full' : ''
              }`}
            >
              <img
                src={src}
                alt="Ninkie's Bakes celebration cake"
                className={`w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110 ${
                  i === 0 ? 'h-full min-h-[320px]' : 'h-48 md:h-64'
                }`}
              />
              <div className="absolute inset-0 bg-espresso-900/0 group-hover:bg-espresso-900/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
