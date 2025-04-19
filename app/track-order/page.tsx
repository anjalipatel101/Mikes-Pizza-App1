"use client";

import { useState } from 'react';
import OrderProgress from '../components/OrderProgress';
import OrderDetails from '../components/OrderDetails';
import OrderHistory from '../components/OrderHistory';
import Footer from '../components/Footer';

interface OrderItem {
	name: string;
	description?: string;
	price: number;
	quantity: number;
	image: string;
}

interface Order {
	orderId: string;
	estimatedDelivery: string;
	orderPlaced: string;
	status: 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered';
	items: OrderItem[];
	subtotal: number;
	deliveryFee: number;
	total: number;
}

export default function TrackOrderPage() {
	const [currentOrder] = useState<Order>({
		orderId: '#12345',
		estimatedDelivery: '7:30 PM',
		orderPlaced: 'April 17, 2025 7:00 PM',
		status: 'preparing',
		items: [
			{
				name: 'Pepperoni Pizza',
				description: 'Large, Extra Cheese',
				price: 18.99,
				quantity: 1,
				image: '/images/pep.png'
			},
			{
				name: 'Soft Drink',
				description: 'Cola, 500ml',
				price: 2.99,
				quantity: 1,
				image: '/images/fountain_drinks.jpg'
			}
		],
		subtotal: 21.98,
		deliveryFee: 3.00,
		total: 24.98
	});

	return (
		<>
			<div className="max-w-4xl mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>
				
				<div className="bg-white rounded-lg shadow p-6">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
						<div>
							<p className="text-gray-600">Order {currentOrder.orderId}</p>
							<p className="text-gray-600">Estimated Delivery: {currentOrder.estimatedDelivery}</p>
						</div>
						<p className="text-gray-600">
							Order Placed<br/>{currentOrder.orderPlaced}
						</p>
					</div>

					<OrderProgress status={currentOrder.status} />
					
					<OrderDetails 
						items={currentOrder.items}
						subtotal={currentOrder.subtotal}
						deliveryFee={currentOrder.deliveryFee}
						total={currentOrder.total}
					/>

					<OrderHistory />
				</div>
			</div>
			<Footer />
		</>
	);
}


