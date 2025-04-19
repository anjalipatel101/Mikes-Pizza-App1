import Image from 'next/image';

interface CustomerFavoriteProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: string) => void;
}

export default function CustomerFavorite({
  id,
  name,
  price,
  image,
  onAddToCart
}: CustomerFavoriteProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="w-full h-32 relative rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
      <button 
        onClick={() => onAddToCart(id)}
        className="w-full bg-[#0069a7] text-white py-2 rounded hover:bg-[#005286] transition-colors text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
} 