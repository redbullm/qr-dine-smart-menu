
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-menu-neutral-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-white font-poppins font-bold text-2xl">
              QR<span className="text-menu-accent">Dine</span>
            </span>
          </Link>
          <p className="mt-4 text-gray-300">
            Smart QR code menu system for modern restaurants.
          </p>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-medium text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-menu-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-menu-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-menu-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-medium text-lg mb-4">For Restaurants</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/restaurant/login" className="text-gray-300 hover:text-menu-accent">
                Restaurant Login
              </Link>
            </li>
            <li>
              <Link to="/restaurant/register" className="text-gray-300 hover:text-menu-accent">
                Join as Restaurant
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="font-medium text-lg mb-4">For Users</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/login" className="text-gray-300 hover:text-menu-accent">
                User Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-gray-300 hover:text-menu-accent">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
        <p>© {new Date().getFullYear()} QRDine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
