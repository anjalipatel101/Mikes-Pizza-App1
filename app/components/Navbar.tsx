"use client";

import Link from "next/link";
import { FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0069a7] shadow-lg' : 'bg-[#0069a7]'}`}>
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between h-[72px] px-6">
					{/* Logo */}
					<Link href="/" className="flex items-center text-white text-xl lg:text-2xl font-semibold">
						<FaPizzaSlice className="text-2xl lg:text-3xl mr-2" />
						<span className="hidden sm:block">Mike's Cheesy Pizzas</span>
						<span className="block sm:hidden">Mike's Pizza</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-6">
						<Link href="/" className="text-white hover:text-gray-200 transition">
							Home
						</Link>
						<Link href="/menu" className="text-white hover:text-gray-200 transition">
							Menu
						</Link>
						<Link href="/track-order" className="text-white hover:text-gray-200 transition">
							Track Order
						</Link>
						<Link href="https://us-east-2yzahmurmt.auth.us-east-2.amazoncognito.com/login?client_id=9mka5k1capi3rlsv8sfurq13k&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3w16m2ou703w5.amplifyapp.com%2F" className="text-white hover:text-gray-200 transition">
							Sign In
						</Link>
						<Link 
							href="https://us-east-2yzahmurmt.auth.us-east-2.amazoncognito.com/signup?client_id=9mka5k1capi3rlsv8sfurq13k&redirect_uri=https%3A%2F%2Fmain.d3w16m2ou703w5.amplifyapp.com%2F&response_type=code&scope=email+openid+phone" 
							className="bg-white text-[#0069a7] px-4 py-2 rounded hover:bg-gray-100 transition font-medium"
						>
							Sign Up
						</Link>
						<Link 
							href="/cart" 
							className="bg-white p-2 rounded flex items-center justify-center hover:bg-gray-100 transition relative"
						>
							<FaShoppingCart className="text-[#0069a7] text-xl" />
							<span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 -right-2">
								0
							</span>
						</Link>
					</div>

					{/* Mobile Navigation Button */}
					<div className="flex lg:hidden items-center space-x-4">
						<Link 
							href="/cart" 
							className="bg-white p-2 rounded flex items-center justify-center hover:bg-gray-100 transition relative"
						>
							<FaShoppingCart className="text-[#0069a7] text-xl" />
							<span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 -right-2">
								0
							</span>
						</Link>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-white hover:text-gray-200 focus:outline-none"
						>
							{isOpen ? (
								<HiX className="h-6 w-6" />
							) : (
								<HiMenu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden transition-all duration-300 ease-in-out absolute w-full bg-[#0069a7] ${
						isOpen
							? 'opacity-100'
							: 'opacity-0 invisible'
					}`}
				>
					<div className="flex flex-col px-6 py-4">
						<Link 
							href="/" 
							className="text-white hover:bg-[#0078bd] py-3 transition"
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
						<Link 
							href="/menu" 
							className="text-white hover:bg-[#0078bd] py-3 transition"
							onClick={() => setIsOpen(false)}
						>
							Menu
						</Link>
						<Link 
							href="/track-order" 
							className="text-white hover:bg-[#0078bd] py-3 transition"
							onClick={() => setIsOpen(false)}
						>
							Track Order
						</Link>
						<Link 
							href="/signin" 
							className="text-white hover:bg-[#0078bd] py-3 transition"
							onClick={() => setIsOpen(false)}
						>
							Sign In
						</Link>
						<Link 
							href="/signup" 
							className="bg-white text-[#0069a7] px-4 py-2 rounded hover:bg-gray-100 transition font-medium text-center mt-3"
							onClick={() => setIsOpen(false)}
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
