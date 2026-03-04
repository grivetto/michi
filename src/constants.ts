export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'pizza' | 'pasta' | 'main' | 'dessert' | 'wine';
  tags?: string[];
}

export const MENU_DATA: MenuItem[] = [
  {
    id: 'p1',
    name: 'Margherita Classica',
    description: 'San Marzano tomato, buffalo mozzarella, fresh basil, extra virgin olive oil.',
    price: '14.00',
    category: 'pizza',
    tags: ['Vegetarian', 'Popular']
  },
  {
    id: 'p2',
    name: 'Diavola',
    description: 'Tomato sauce, mozzarella, spicy salami, chili flakes.',
    price: '16.50',
    category: 'pizza'
  },
  {
    id: 'p3',
    name: 'Tartufata',
    description: 'White base, mozzarella, truffle cream, porcini mushrooms, parsley.',
    price: '19.00',
    category: 'pizza',
    tags: ['Chef Special']
  },
  {
    id: 'pa1',
    name: 'Linguine allo Scoglio',
    description: 'Fresh linguine with mussels, clams, prawns, and cherry tomatoes.',
    price: '22.00',
    category: 'pasta'
  },
  {
    id: 'pa2',
    name: 'Pappardelle al Cinghiale',
    description: 'Handmade wide pasta with slow-cooked wild boar ragù.',
    price: '20.00',
    category: 'pasta'
  },
  {
    id: 'm1',
    name: 'Tagliata di Manzo',
    description: 'Grilled sliced beef ribeye served with rocket, parmesan shavings, and balsamic glaze.',
    price: '28.00',
    category: 'main'
  },
  {
    id: 'd1',
    name: 'Tiramisù della Casa',
    description: 'Traditional homemade tiramisù with espresso-soaked ladyfingers and mascarpone.',
    price: '8.50',
    category: 'dessert'
  }
];
