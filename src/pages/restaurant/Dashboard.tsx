
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import RestaurantHeader from "@/components/restaurant/RestaurantHeader";
import { QrCode, UtensilsCrossed, Star, LineChart, PlusCircle } from "lucide-react";
import QRCode from "@/components/restaurant/QRCode";
import MenuList from "@/components/restaurant/MenuList";
import ReviewsList from "@/components/restaurant/ReviewsList";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <RestaurantHeader />
      
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Restaurant Dashboard</h1>
          
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Menu Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold">24</div>
                  <UtensilsCrossed className="h-6 w-6 text-menu-primary" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">QR Code Scans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold">128</div>
                  <QrCode className="h-6 w-6 text-menu-secondary" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div className="flex items-center">
                    <div className="text-3xl font-bold mr-2">4.7</div>
                    <div className="flex">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 fill-opacity-70" />
                    </div>
                  </div>
                  <Star className="h-6 w-6 text-menu-accent" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold">47</div>
                  <LineChart className="h-6 w-6 text-menu-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="menu" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="menu" className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4" />
                    <span>Menu Management</span>
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span>Reviews</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="menu" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Menu Items</h2>
                    <Button className="bg-menu-primary hover:bg-menu-primary/90">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Menu Item
                    </Button>
                  </div>
                  
                  <Separator />
                  
                  <MenuList />
                </TabsContent>
                
                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Customer Reviews</h2>
                  </div>
                  
                  <Separator />
                  
                  <ReviewsList />
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Your QR Code</CardTitle>
                  <CardDescription>
                    Print this QR code and place it on your tables for customers to scan.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <QRCode />
                  <Button className="mt-4 w-full">
                    Download QR Code
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
