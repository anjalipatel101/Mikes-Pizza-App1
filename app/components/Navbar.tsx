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
				<Link href="https://us-east-2yzahmurmt.auth.us-east-2.amazoncognito.com/login?client_id=9mka5k1capi3rlsv8sfurq13k&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3w16m2ou703w5.amplifyapp.com%2F" className="nav-links">Sign In</Link>
				<Link href="https://us-east-2yzahmurmt.auth.us-east-2.amazoncognito.com/signup?client_id=9mka5k1capi3rlsv8sfurq13k&redirect_uri=https%3A%2F%2Fmain.d3w16m2ou703w5.amplifyapp.com%2F&response_type=code&scope=email+openid+phone" className="nav-links">Sign Up</Link>
				<Link href="/cart" className="nav-links"><div className="nav-cart-btn"><FaShoppingCart className="nav-cart-icon" /></div></Link>
			</ul>
		</nav>
	)
}

export default Navbar;
