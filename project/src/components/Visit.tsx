import type { FormEvent } from 'react';
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react';

const phoneNumber = '+27815798780';
const whatsappUrl = `https://wa.me/27815798780?text=${encodeURIComponent(
  "Hello Ninkie's Bakes, I would like to place an order."
)}`;

const hours = [
  { day: 'Monday', time: '9:00am – 6:00pm' },
  { day: 'Tuesday', time: '9:00am – 6:00pm' },
  { day: 'Wednesday', time: '9:00am – 6:00pm' },
  { day: 'Thursday', time: '9:00am – 6:00pm' },
  { day: 'Friday', time: '9:00am – 6:00pm' },
  { day: 'Saturday', time: '9:00am – 6:00pm' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Visit() {
  const sendOrderToWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const order = String(formData.get('order') ?? '');
    const pickupDate = String(formData.get('date') ?? '');
    const message = `Hello Ninkie's Bakes, I would like to place an order.%0A%0AName: ${name}%0AOrder: ${order}%0APickup date: ${pickupDate}`;
    window.location.href = `https://wa.me/27815798780?text=${message}`;
  };

  return (
    <section id="visit" className="py-28 md:py-36 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        <div className="flex flex-col justify-center">
          <p className="font-script text-3xl text-crust-500 reveal">Come say hello</p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl font-semibold text-espresso-900 leading-tight reveal">
            Visit Ninkie's Bakes
          </h1>
          <p className="mt-6 text-espresso-700/90 leading-relaxed text-lg reveal">
            Visit us in Pretoria or send your order straight to WhatsApp. We would
            love to make something special for your next celebration.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex items-start gap-4 reveal">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crust-100 text-crust-700 shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-serif text-xl font-semibold text-espresso-900">Address</h2>
                <p className="text-espresso-600 mt-1">53 Monokane Street, Pretoria, Gauteng, 0008, South Africa</p>
              </div>
            </div>

            <div className="flex items-start gap-4 reveal">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crust-100 text-crust-700 shrink-0">
                <Clock className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h2 className="font-serif text-xl font-semibold text-espresso-900">Business hours</h2>
                <ul className="mt-3 space-y-2">
                  {hours.map((hour) => (
                    <li key={hour.day} className="flex justify-between gap-5 text-espresso-600 text-sm">
                      <span>{hour.day}</span>
                      <span className="text-espresso-800 font-medium whitespace-nowrap">{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 reveal">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-crust-100 text-crust-700 shrink-0">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-serif text-xl font-semibold text-espresso-900">Call or WhatsApp</h2>
                <a href={`tel:${phoneNumber}`} className="text-espresso-600 mt-1 block hover:text-crust-600 transition-colors">
                  +27 81 579 8780
                </a>
              </div>
            </div>
          </div>

          <a
            href={whatsappUrl}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-crust-600 text-cream-50 px-6 py-3.5 font-medium hover:bg-crust-700 transition-colors reveal"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="bg-espresso-900 text-cream-50 rounded-3xl p-8 md:p-10 shadow-warm reveal">
          <h2 className="font-serif text-3xl font-semibold">Place a pre-order</h2>
          <p className="mt-2 text-cream-200/80 text-sm">
            Complete the details and we will open a WhatsApp message for you.
          </p>

          <form className="mt-8 space-y-5" onSubmit={sendOrderToWhatsApp}>
            <Field label="Name" name="name" placeholder="Your name" required />
            <div>
              <label className="block text-sm text-cream-200 mb-2" htmlFor="order">Your order</label>
              <textarea
                id="order"
                name="order"
                rows={5}
                required
                placeholder="Tell us which cake or treats you would like..."
                className="w-full rounded-xl bg-espresso-800/70 border border-cream-100/15 px-4 py-3 text-cream-50 placeholder:text-cream-200/40 focus:outline-none focus:border-crust-400 focus:ring-1 focus:ring-crust-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-cream-200 mb-2" htmlFor="date">Pickup date</label>
              <input
                id="date"
                type="date"
                name="date"
                required
                className="w-full rounded-xl bg-espresso-800/70 border border-cream-100/15 px-4 py-3 text-cream-50 focus:outline-none focus:border-crust-400 focus:ring-1 focus:ring-crust-400 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-crust-500 text-cream-50 py-4 font-medium hover:bg-crust-400 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Continue to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-cream-200 mb-2" htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-espresso-800/70 border border-cream-100/15 px-4 py-3 text-cream-50 placeholder:text-cream-200/40 focus:outline-none focus:border-crust-400 focus:ring-1 focus:ring-crust-400 transition-colors"
      />
    </div>
  );
}
