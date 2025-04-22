"use client";

import Link from 'next/link';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

interface CustomerFavorite {
	id: string;
	name: string;
	price: number;
	image: string;
}

export default function CartPage() {
	const { cartItems, updateQuantity, removeFromCart, addToCart } = useCart();

	const customerFavorites: CustomerFavorite[] = [
		{
			id: '3',
			name: 'BBQ Chicken',
			price: 22.99,
			image: '/images/bbq_pizza.jpg'
		},
		{
			id: '4',
			name: 'Chocolate Lava Cake',
			price: 6.99,
			image: '/images/chocolate_lava_cake.jpg'
		}
	];

	const handleAddFavorite = (favorite: CustomerFavorite) => {
		addToCart({
			id: favorite.id,
			name: favorite.name,
			description: '',
			price: favorite.price,
			image: favorite.image,
		});
	};

	const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
	const deliveryFee = 5.00;
	const tax = subtotal * 0.08; 
	const total = subtotal + deliveryFee + tax;

	return (
		<>
			<div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold mb-8">Your Cart</h1>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Cart Items Section */}
					<div className="lg:col-span-2 space-y-6">
						{cartItems.map((item) => (
							<div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
								<div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100">
									<Image
										src={item.image}
										alt={item.name}
										fill
										className="object-cover"
										sizes="96px"
										priority
										onError={(e) => {
											const target = e.target as HTMLImageElement;
											target.src = '/images/placeholder.jpg';
										}}
									/>
								</div>

								<div className="flex-grow">
									<h3 className="font-semibold text-lg">{item.name}</h3>
									<p className="text-gray-600">{item.description}</p>
								</div>
								
								<div className="flex items-center space-x-4">
									<div className="flex items-center space-x-2">
										<button
											onClick={() => updateQuantity(item.id, item.quantity - 1)}
											className="p-1 hover:bg-gray-100 rounded"
										>
											<FaMinus className="w-4 h-4" />
										</button>
										<span className="w-8 text-center">{item.quantity}</span>
										<button
											onClick={() => updateQuantity(item.id, item.quantity + 1)}
											className="p-1 hover:bg-gray-100 rounded"
										>
											<FaPlus className="w-4 h-4" />
										</button>
									</div>

									<div className="text-right">
										<p className="font-semibold">${item.price.toFixed(2)}</p>
									</div>

									<button
										onClick={() => removeFromCart(item.id)}
										className="p-2 text-gray-400 hover:text-red-500"
									>
										<FaTrash className="w-4 h-4" />
									</button>
								</div>
							</div>
						))}
					</div>
					{/* Order Summary Section */}
					<div className="lg:col-span-1">
						<div className="bg-white p-6 rounded-lg shadow sticky top-4">
							<h2 className="text-xl font-semibold mb-4">Order Summary</h2>
							<div className="space-y-3">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span>${subtotal.toFixed(2)}</span>
								</div>
								<div className="flex justify-between">
									<span>Delivery Fee</span>
									<span>${deliveryFee.toFixed(2)}</span>
								</div>
								<div className="flex justify-between">
									<span>Tax</span>
									<span>${tax.toFixed(2)}</span>
								</div>
								<div className="flex justify-between font-semibold text-lg pt-3 border-t">
									<span>Total</span>
									<span>${total.toFixed(2)}</span>
								</div>
							</div>
							<button className="w-full bg-[#0069a7] text-white py-3 rounded mt-6 hover:bg-[#005286] transition-colors">
								Proceed to Checkout
							</button>
							<Link href="/menu" className="block text-center mt-4 text-[#0069a7] hover:text-[#005286]">
								Continue Shopping
							</Link>
						</div>
					</div>
				</div>
				{/* Customer Favorites Section */}
				<div className="mt-16">
					<h2 className="text-xl font-semibold mb-4">Customer Favorites</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{customerFavorites.map((favorite) => (
							<div key={favorite.id} className="bg-white rounded-lg shadow overflow-hidden">
								<div className="w-full h-48 relative bg-gray-100">
									<Image
										src={favorite.image}
										alt={favorite.name}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										onError={(e) => {
											const target = e.target as HTMLImageElement;
											target.src = '/images/placeholder.jpg';
										}}
									/>
								</div>
								<div className="p-4">
									<h3 className="font-semibold">{favorite.name}</h3>
									<p className="text-gray-600 mb-4">${favorite.price.toFixed(2)}</p>
									<button 
										onClick={() => handleAddFavorite(favorite)}
										className="w-full bg-[#0069a7] text-white py-2 rounded hover:bg-[#005286] transition-colors"
									>
										Add to Cart
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
