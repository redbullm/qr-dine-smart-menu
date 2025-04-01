
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-menu-primary font-poppins font-bold text-2xl">
            QR<span className="text-menu-secondary">Dine</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-menu-primary">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-menu-primary">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-menu-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button className="bg-menu-primary hover:bg-menu-primary/90" asChild>
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
