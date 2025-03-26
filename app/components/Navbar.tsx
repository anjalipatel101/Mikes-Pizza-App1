"use client";

import Link from "next/link";
import { FaPizzaSlice, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link href="/" className="nav-logo">
				<FaPizzaSlice className="nav-logo-icon" />
				Mike's Cheesy Pizzas
			</Link>
			<ul className="nav-ul">
				<Link href="/menu" className="nav-links">Menu</Link>
				<Link href="/track-order" className="nav-links">Track Order</Link>
				<Link href="/login" className="nav-links">Sign In</Link>
				<Link href="/signup" className="nav-links">Sign Up</Link>
				<Link href="/cart" className="nav-links"><div className="nav-cart-btn"><FaShoppingCart className="nav-cart-icon" /></div></Link>
			</ul>
		</nav>
	)
}

export default Navbar;
