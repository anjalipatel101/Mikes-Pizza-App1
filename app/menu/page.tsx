"use client";

import React from "react";
import Image from "next/image";
import "../styles/menu.css";
import deluxeImg from "../../public/images/deluxe.png";
import cheeseImg from "../../public/images/cheese.png";
import meatImg from "../../public/images/meat.png";
import pepImg from "../../public/images/pep.png";
import { MenuItem } from "../types/menu";

const menuItems: MenuItem[] = [
	{
		id: 1,
		name: "Deluxe",
		price: "$12.99",
		image: deluxeImg,
	},
	{
		id: 2,
		name: "Cheese",
		price: "$10.99",
		image: cheeseImg,
	},
	{
		id: 3,
		name: "Meat Lover's",
		price: "$13.99",
		image: meatImg,
	},
	{
		id: 4,
		name: "Chalupa Supreme",
		price: "$5.19",
		image: pepImg,
	},
];

const Menu: React.FC = () => {
	return (
		<div className="menu-content">
			<h1 className="menu-title">SPECIALTY PIZZAS</h1>
			<div className="menu-items">
				{menuItems.map((pizza: MenuItem) => (
					<div key={pizza.id} className="pizza-card">
						<Image 
							src={pizza.image} 
							alt={pizza.name} 
							className="pizza-img"
							width={300}
							height={300}
						/>
						<h3 className="pizza-title">{pizza.name}</h3>
						{/* <p className="pizza-subtitle">{pizza.description}</p> use for recipe description later*/}
						<p className="pizza-price">{pizza.price}</p>
						<button>ADD TO ORDER</button>
					</div>
				))}
			</div>

		</div>
	)
}

export default Menu


