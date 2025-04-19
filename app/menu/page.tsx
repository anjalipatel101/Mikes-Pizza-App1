"use client";

import { useState } from 'react';
import MenuItem from '../components/MenuItem';
import Link from 'next/link';
import { FaPizzaSlice } from 'react-icons/fa';

type Category = 'Pizza' | 'Sides' | 'Drinks' | 'Desserts';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Deluxe Pizza',
    description: 'A loaded combination of pepperoni, sausage, mushrooms, onions, and green peppers',
    price: 18.99,
    image: '/images/deluxe.png',
    category: 'Pizza'
  },
  {
    id: '2',
    name: 'Classic Cheese Pizza',
    description: 'Our signature sauce topped with premium mozzarella cheese',
    price: 14.99,
    image: '/images/cheese.png',
    category: 'Pizza'
  },
  {
    id: '3',
    name: 'Meat Lovers Pizza',
    description: 'Loaded with pepperoni, Italian sausage, ham, bacon, and seasoned beef',
    price: 19.99,
    image: '/images/meat.png',
    category: 'Pizza'
  },
  {
    id: '4',
    name: 'Pepperoni Pizza',
    description: 'Classic pepperoni with our signature sauce and mozzarella',
    price: 16.99,
    image: '/images/pep.png',
    category: 'Pizza'
  },
  {
    id: '5',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil',
    price: 15.99,
    image: '/images/margherita_pizza.jpg',
    category: 'Pizza'
  },
  {
    id: '6',
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, BBQ sauce, red onions',
    price: 17.99,
    image: '/images/bbq_pizza.jpg',
    category: 'Pizza'
  },
  {
    id: '7',
    name: 'Garlic Breadsticks',
    description: 'Fresh-baked breadsticks with garlic butter',
    price: 5.99,
    image: '/images/garlic_breadsticks.jpg',
    category: 'Sides'
  },
  {
    id: '8',
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan',
    price: 7.99,
    image: '/images/caesar_salad.jpg',
    category: 'Sides'
  },
  {
    id: '9',
    name: 'Fountain Drink',
    description: 'Your choice of soft drink',
    price: 2.99,
    image: '/images/fountain_drinks.jpg',
    category: 'Drinks'
  },
  {
    id: '10',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, topped with vanilla ice cream and chocolate drizzle',
    price: 6.99,
    image: '/images/chocolate_lava_cake.jpg',
    category: 'Desserts'
  }
];

const categories = ['All', 'Pizza', 'Sides', 'Drinks', 'Desserts'];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (id: string) => {
    // TODO: Implement cart functionality
    console.log(`Added item ${id} to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category
                    ? 'bg-[#0069a7] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.id}
                  {...item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0069a7] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="text-center sm:text-left">
              <Link href="/" className="inline-flex sm:flex items-center mb-4 justify-center sm:justify-start">
                <FaPizzaSlice className="text-3xl mr-2" />
                <span className="text-lg sm:text-xl font-semibold">Mike's Cheesy Pizzas</span>
              </Link>
              <p className="text-sm">
                Fresh, hot, and delicious pizzas delivered to your doorstep.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-200 transition duration-300">Home</Link></li>
                <li><Link href="/menu" className="hover:text-gray-200 transition duration-300">Menu</Link></li>
                <li><Link href="/track-order" className="hover:text-gray-200 transition duration-300">Track Order</Link></li>
                <li><Link href="/about" className="hover:text-gray-200 transition duration-300">About Us</Link></li>
              </ul>
            </div>

            {/* Contact info*/}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center justify-center sm:justify-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 609-234-6435
                </p>
                <p className="flex items-center justify-center sm:justify-start">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  MikesPizza@gmail.com
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <Link href="https://facebook.com" className="hover:text-gray-200 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="hover:text-gray-200 transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="https://twitter.com" className="hover:text-gray-200 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#005286] mt-8 sm:mt-12 pt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
            © 2025 Mike's Cheesy Pizzas. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}


