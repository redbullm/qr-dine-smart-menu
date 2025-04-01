
import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/frontend/components/layout/Header";
import Footer from "@/frontend/components/layout/Footer";
import RestaurantHeader from "@/frontend/components/restaurant/RestaurantHeader";
import MenuList from "@/frontend/components/restaurant/MenuList";
import ReviewsList from "@/frontend/components/restaurant/ReviewsList";
import ReviewForm from "@/frontend/components/user/ReviewForm";

const MenuView = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <RestaurantHeader restaurantId={restaurantId || ""} />
          
          <Tabs defaultValue="menu" className="mt-8">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="menu" className="flex-1">Menu</TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
              <TabsTrigger value="info" className="flex-1">Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menu" className="mt-6">
              <MenuList restaurantId={restaurantId || ""} />
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card className="p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
                <ReviewForm restaurantId={restaurantId || ""} />
              </Card>
              
              <Separator className="my-8" />
              
              <ReviewsList restaurantId={restaurantId || ""} />
            </TabsContent>
            
            <TabsContent value="info" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Restaurant Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Address</h4>
                    <p className="text-gray-600">123 Restaurant Street, Foodville, CA 94107</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                      <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Contact</h4>
                    <p className="text-gray-600">Phone: (555) 123-4567</p>
                    <p className="text-gray-600">Email: info@restaurantname.com</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MenuView;
