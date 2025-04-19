import Image from 'next/image';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

interface CartItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  id,
  name,
  description,
  price,
  quantity,
  image,
  onUpdateQuantity,
  onRemove
}: CartItemProps) {
  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
      <div className="w-20 h-20 relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 80px, 80px"
        />
      </div>

      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(id, quantity - 1)}
            className="p-1 hover:bg-gray-100 rounded"
            aria-label="Decrease quantity"
          >
            <FaMinus className="w-3 h-3" />
          </button>
          <span className="w-6 text-center text-sm">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(id, quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded"
            aria-label="Increase quantity"
          >
            <FaPlus className="w-3 h-3" />
          </button>
        </div>

        <div className="text-right">
          <p className="font-semibold">${price.toFixed(2)}</p>
        </div>

        <button
          onClick={() => onRemove(id)}
          className="p-1 text-gray-400 hover:text-red-500"
          aria-label="Remove item"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
} 