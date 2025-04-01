
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Header from "@/frontend/components/layout/Header";
import Footer from "@/frontend/components/layout/Footer";
import { UtensilsCrossed, Users } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 px-6 bg-gray-50">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
          
          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="user" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Customer</span>
              </TabsTrigger>
              <TabsTrigger value="restaurant" className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4" />
                <span>Restaurant</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="user">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="user-email">Email</Label>
                  <Input
                    id="user-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="user-password">Password</Label>
                  <Input
                    id="user-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-menu-secondary hover:bg-menu-secondary/90">
                  Create Account
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-menu-secondary hover:underline">
                    Log In
                  </Link>
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="restaurant">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="restaurant-name">Restaurant Name</Label>
                  <Input
                    id="restaurant-name"
                    placeholder="Amazing Restaurant"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="restaurant-email">Email</Label>
                  <Input
                    id="restaurant-email"
                    type="email"
                    placeholder="restaurant@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="restaurant-phone">Phone Number</Label>
                  <Input
                    id="restaurant-phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="restaurant-address">Address</Label>
                  <Input
                    id="restaurant-address"
                    placeholder="123 Restaurant Street"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="restaurant-password">Password</Label>
                  <Input
                    id="restaurant-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="restaurant-confirm-password">Confirm Password</Label>
                  <Input
                    id="restaurant-confirm-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-menu-primary hover:bg-menu-primary/90">
                  Register Restaurant
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <p>
                  Already have a restaurant account?{" "}
                  <Link to="/restaurant/login" className="text-menu-primary hover:underline">
                    Log In as Restaurant
                  </Link>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
