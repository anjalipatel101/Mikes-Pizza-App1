import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPizzaSlice } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0069a7] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-flex sm:flex items-center mb-4 justify-center sm:justify-start">
              <FaPizzaSlice className="text-3xl mr-2" />
              <span className="text-lg sm:text-xl font-semibold">Mike's Cheesy Pizzas</span>
            </Link>
            <p className="text-sm">
              Fresh, hot, and delicious pizzas delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-200 transition duration-300">Home</Link></li>
              <li><Link href="/menu" className="hover:text-gray-200 transition duration-300">Menu</Link></li>
              <li><Link href="/track-order" className="hover:text-gray-200 transition duration-300">Track Order</Link></li>
              <li><Link href="/about" className="hover:text-gray-200 transition duration-300">About Us</Link></li>
            </ul>
          </div>

          {/* Contact info*/}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 609-234-6435
              </p>
              <p className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                MikesPizza@gmail.com
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link href="https://facebook.com" className="hover:text-gray-200 transition duration-300">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-gray-200 transition duration-300">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-gray-200 transition duration-300">
                <FaTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#005286] mt-8 sm:mt-12 pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          © {new Date().getFullYear()} Mike's Cheesy Pizzas. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 