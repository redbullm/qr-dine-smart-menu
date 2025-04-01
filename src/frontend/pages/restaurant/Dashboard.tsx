
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import RestaurantHeader from "@/frontend/components/restaurant/RestaurantHeader";
import { QrCode, UtensilsCrossed, Star, LineChart, PlusCircle, Download } from "lucide-react";
import QRCode from "@/frontend/components/restaurant/QRCode";
import MenuList from "@/frontend/components/restaurant/MenuList";
import ReviewsList from "@/frontend/components/restaurant/ReviewsList";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [restaurant, setRestaurant] = useState({
    id: "demo-restaurant",
    name: "Your Restaurant"
  });
  const { toast } = useToast();

  // In a real implementation, we would fetch the restaurant data from Supabase
  // This is just a placeholder for now
  useEffect(() => {
    // This would be replaced with actual data fetching once we have the tables set up
    const fetchRestaurant = async () => {
      try {
        // This is where we would get the actual restaurant data
        // const { data, error } = await supabase.from('restaurants').select('*').single();
        // if (error) throw error;
        // setRestaurant(data);
        
        // For now, we'll just simulate a restaurant
        setRestaurant({
          id: "demo-restaurant",
          name: "Your Restaurant"
        });
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };
    
    fetchRestaurant();
  }, []);
  
  const handleDownloadQR = () => {
    const svg = document.querySelector(".qr-code-container svg");
    if (!svg) {
      toast({
        title: "Error",
        description: "Could not find QR code to download",
        variant: "destructive"
      });
      return;
    }
    
    // Convert SVG to data URL
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    // Create image from SVG
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      // Draw white background
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw SVG on canvas
      ctx.drawImage(img, 0, 0);
      
      // Convert to PNG and download
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${restaurant.name.replace(/\s+/g, '-').toLowerCase()}-qr-code.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Clean up
      URL.revokeObjectURL(svgUrl);
    };
    img.src = svgUrl;
  };

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
                  <div className="qr-code-container">
                    <QRCode restaurantId={restaurant.id} restaurantName={restaurant.name} />
                  </div>
                  <Button className="mt-4 w-full" onClick={handleDownloadQR}>
                    <Download className="h-4 w-4 mr-2" />
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
