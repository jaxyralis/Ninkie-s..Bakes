export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Bread' | 'Pastry' | 'Cake' | 'Savory';
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: 'tr',
    name: 'Emoji bento box from',
    description: 'A playful celebration cake paired with decorated cupcakes.',
    price: 'R650',
    category: 'Cake',
    image: '/assets/images/image copy 10.png',
    tag: 'Signature cake',
  },
  {
    id: 'wafer-from',
    name: 'Emoji bento box from',
    description: 'A bright celebration cake with matching decorated cupcakes.',
    price: 'R650',
    category: 'Cake',
    image: '/assets/images/image copy 11.png',
    tag: 'Celebration favourite',
  },
  {
    id: 'winnie-the-pooh-bento',
    name: 'Bento box',
    description: 'A colourful bento box cake made for memorable celebrations.',
    price: '',
    category: 'Cake',
    image: '/assets/images/image copy 12.png',
    tag: 'Bento cake',
  },
  {
    id: 'celebration-3',
    name: 'Wafer paper cake',
    description: 'A delicate wafer paper cake with an elegant all-white finish.',
    price: '',
    category: 'Cake',
    image: '/assets/images/image copy 13.png',
    tag: 'Custom design',
  },
  {
    id: 'celebration-4',
    name: 'Bento+2cupcakes from',
    description: 'A celebration bento cake served with two decorated cupcakes.',
    price: 'R400',
    category: 'Cake',
    image: '/assets/images/image copy 14.png',
    tag: 'Bestseller',
  },
  {
    id: 'original-tr',
    name: 'T.R',
    description: 'A bold celebration cake finished with dramatic black and silver details.',
    price: '',
    category: 'Cake',
    image: '/cake/image.png',
    tag: 'Signature cake',
  },
  {
    id: 'original-wafer-from',
    name: 'Wafer from',
    description: 'A bright, elegant birthday cake with delicate wafer-inspired decoration.',
    price: 'R1,200',
    category: 'Cake',
    image: '/cake/image copy.png',
    tag: 'Celebration favourite',
  },
  {
    id: 'original-winnie-the-pooh-bento',
    name: 'Winnie the pooh bento',
    description: 'A cheerful bento cake with honey-loving character details for little milestones.',
    price: 'R350',
    category: 'Cake',
    image: '/cake/image copy 2.png',
    tag: 'Bento cake',
  },
  {
    id: 'original-bento-box',
    name: 'Bento box',
    description: 'A vibrant multi-tier cake tailored to your colours and theme.',
    price: '',
    category: 'Cake',
    image: '/cake/image copy 3.png',
    tag: 'Custom design',
  },
];

export const heroImages = [
  '/cake/image copy 5.png',
  '/cake/image copy 4.png',
  '/cake/image copy 3.png',
  '/assets/images/image copy 9.png',
  '/assets/images/image copy 8.png',
  '/assets/images/image copy 7.png',
];

export const galleryImages = [
  '/cake/image.png',
  '/cake/image copy.png',
  '/cake/image copy 2.png',
  '/cake/image copy 3.png',
  '/cake/image copy 4.png',
  '/cake/image copy 5.png',
  '/cake/image copy 6.png',
  '/cake/image copy 7.png',
  '/assets/images/image copy 7.png',
  '/assets/images/image copy 8.png',
  '/assets/images/image copy 9.png',
];
