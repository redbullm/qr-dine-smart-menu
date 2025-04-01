
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { UtensilsCrossed, Users } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 px-6 bg-gray-50">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-center mb-8">Log In</h1>
          
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="user-password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-menu-secondary hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    id="user-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-menu-secondary hover:bg-menu-secondary/90">
                  Log In
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-menu-secondary hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="restaurant">
              <form className="space-y-6">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="restaurant-password">Password</Label>
                    <Link
                      to="/restaurant/forgot-password"
                      className="text-sm text-menu-primary hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    id="restaurant-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-menu-primary hover:bg-menu-primary/90">
                  Log In as Restaurant
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <p>
                  Don't have a restaurant account?{" "}
                  <Link to="/restaurant/register" className="text-menu-primary hover:underline">
                    Register Restaurant
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

export default Login;
