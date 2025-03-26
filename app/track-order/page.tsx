"use client";

import React, { useState } from 'react';
import '../styles/trackorder.css';
import { OrderStage } from '../types/trackOrder';

const orderStages: OrderStage[] = [
	{ id: 1, label: "Ordered" },
	{ id: 2, label: "Ready" },
	{ id: 3, label: "Quality Check" },
	{ id: 4, label: "Bake" },
	{ id: 5, label: "Prep" },
]

const TrackOrder: React.FC = () => {
	const [currentStage, setCurrentStage] = useState<number>(1)
	return (
		<div className="track-order-content">
			<h1>Track Order</h1>
		</div>
	)
}

export default TrackOrder


