
import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/frontend/components/layout/Header";
import Footer from "@/frontend/components/layout/Footer";
import { Link } from "react-router-dom";
import { QrCode, UtensilsCrossed, Star, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-menu-neutral-dark mb-6">
                Modern Dining Experience With QR Menus
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your restaurant experience with digital menus accessible via QR codes. 
                Enhance customer satisfaction and simplify menu management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-menu-primary hover:bg-menu-primary/90 text-white" asChild>
                  <Link to="/restaurant/register">Join as Restaurant</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/register">Sign Up as Customer</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="flex gap-4 mb-4">
                    <div className="bg-menu-primary/10 rounded-lg p-4">
                      <QrCode className="h-8 w-8 text-menu-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Scan & Order</h3>
                      <p className="text-gray-500">Access menus instantly</p>
                    </div>
                  </div>
                  <img 
                    src="https://placehold.co/600x400/2A9D8F/FFFFFF/png?text=QR+Menu+Demo" 
                    alt="QR Menu Demo" 
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Restaurant Name</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 text-gray-300" />
                        <span className="text-sm text-gray-500 ml-1">(24 reviews)</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-menu-secondary hover:bg-menu-secondary/90">View Menu</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose QRDine</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our smart menu system offers benefits for both restaurants and customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="menu-card">
                <div className="bg-menu-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6 text-menu-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Custom QR Codes</h3>
                <p className="text-gray-600">
                  Restaurants receive unique QR codes upon registration that link directly to their digital menu.
                </p>
              </div>
              
              <div className="menu-card">
                <div className="bg-menu-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <UtensilsCrossed className="h-6 w-6 text-menu-secondary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Easy Menu Management</h3>
                <p className="text-gray-600">
                  Update your menu items, prices, and descriptions effortlessly through our intuitive dashboard.
                </p>
              </div>
              
              <div className="menu-card">
                <div className="bg-menu-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-menu-accent" />
                </div>
                <h3 className="text-xl font-medium mb-2">Customer Reviews</h3>
                <p className="text-gray-600">
                  Gather valuable feedback from customers and build your restaurant's reputation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Login Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the login type that suits your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 text-center">
                <div className="bg-menu-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UtensilsCrossed className="h-8 w-8 text-menu-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Restaurant Owner</h3>
                <p className="text-gray-600 mb-6">
                  Register your restaurant, create digital menus, and get a unique QR code for your tables.
                </p>
                <div className="flex flex-col gap-3">
                  <Button className="bg-menu-primary hover:bg-menu-primary/90" size="lg" asChild>
                    <Link to="/restaurant/register">Register Restaurant</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/restaurant/login">Login as Restaurant</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 text-center">
                <div className="bg-menu-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-menu-secondary" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Customer</h3>
                <p className="text-gray-600 mb-6">
                  Create an account to rate restaurants, save favorite menus, and enjoy a personalized experience.
                </p>
                <div className="flex flex-col gap-3">
                  <Button className="bg-menu-secondary hover:bg-menu-secondary/90" size="lg" asChild>
                    <Link to="/register">Sign Up</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
