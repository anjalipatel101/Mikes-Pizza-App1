"use client";

import Image from 'next/image';
import { FaPizzaSlice } from 'react-icons/fa';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
}

export default function MenuItem({ 
  id, 
  name, 
  description, 
  price, 
  image,
  onAddToCart 
}: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full bg-gray-200">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FaPizzaSlice className="text-gray-400 text-4xl" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <button 
            className="bg-[#0069a7] text-white px-4 py-2 rounded hover:bg-[#005286] transition duration-300"
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 