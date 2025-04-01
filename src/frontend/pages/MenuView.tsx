
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Info, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link, useParams } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ReviewForm from "@/frontend/components/user/ReviewForm";

// Mock restaurant data
const restaurant = {
  id: "123",
  name: "Delicious Bites",
  logo: "https://placehold.co/100x100/FF7A50/FFFFFF/png?text=DB",
  description: "A cozy restaurant serving delicious meals made with fresh, local ingredients.",
  rating: 4.7,
  reviewCount: 47,
  categories: ["Starters", "Main Course", "Desserts", "Drinks"]
};

// Mock menu items
const menuItems = {
  "Starters": [
    {
      id: 1,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with croutons, parmesan, and Caesar dressing",
      price: 9.99,
      image: "https://placehold.co/400x300/2A9D8F/FFFFFF/png?text=Salad"
    },
    {
      id: 2,
      name: "Garlic Bread",
      description: "Freshly baked bread with garlic butter and herbs",
      price: 5.99,
      image: "https://placehold.co/400x300/F4A261/FFFFFF/png?text=Bread"
    }
  ],
  "Main Course": [
    {
      id: 3,
      name: "Classic Burger",
      description: "Juicy beef patty with lettuce, tomato, and our special sauce",
      price: 12.99,
      image: "https://placehold.co/400x300/FF7A50/FFFFFF/png?text=Burger"
    },
    {
      id: 4,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      price: 14.99,
      image: "https://placehold.co/400x300/F4A261/FFFFFF/png?text=Pizza"
    },
    {
      id: 5,
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection with lemon butter sauce",
      price: 18.99,
      image: "https://placehold.co/400x300/2A9D8F/FFFFFF/png?text=Salmon"
    }
  ],
  "Desserts": [
    {
      id: 6,
      name: "Chocolate Brownie",
      description: "Warm chocolate brownie with vanilla ice cream",
      price: 6.99,
      image: "https://placehold.co/400x300/333333/FFFFFF/png?text=Brownie"
    },
    {
      id: 7,
      name: "Cheesecake",
      description: "Creamy New York style cheesecake with berry compote",
      price: 7.99,
      image: "https://placehold.co/400x300/FF7A50/FFFFFF/png?text=Cheesecake"
    }
  ],
  "Drinks": [
    {
      id: 8,
      name: "Fresh Lemonade",
      description: "Homemade lemonade with fresh lemons and mint",
      price: 3.99,
      image: "https://placehold.co/400x300/F4A261/FFFFFF/png?text=Lemonade"
    },
    {
      id: 9,
      name: "Iced Coffee",
      description: "Cold brew coffee with milk and ice",
      price: 4.99,
      image: "https://placehold.co/400x300/2A9D8F/FFFFFF/png?text=Coffee"
    }
  ]
};

const MenuView = () => {
  const { restaurantId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(restaurant.categories[0]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Restaurant Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-500 hover:text-menu-primary">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-menu-primary text-white font-bold">
                {restaurant.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">{restaurant.name}</h1>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="ghost" className="p-0 h-8 w-8">
                      <Info className="h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{restaurant.name}</DialogTitle>
                      <DialogDescription>
                        {restaurant.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Rating</h3>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < Math.floor(restaurant.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">{restaurant.rating} ({restaurant.reviewCount} reviews)</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Leave a Review</h3>
                        <ReviewForm restaurantId={restaurantId || ""} />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex items-center mt-1">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(restaurant.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{restaurant.rating} ({restaurant.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu Categories */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Tabs 
            defaultValue={selectedCategory} 
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <div className="overflow-x-auto">
              <TabsList className="mt-2 h-14 w-full bg-transparent justify-start">
                {restaurant.categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="px-4 py-2 data-[state=active]:bg-menu-primary/10 data-[state=active]:text-menu-primary"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>
      </div>
      
      {/* Menu Items */}
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {menuItems[selectedCategory as keyof typeof menuItems].map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-48 w-full md:w-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <Badge variant="outline" className="bg-menu-primary/10 text-menu-primary">
                          ${item.price.toFixed(2)}
                        </Badge>
                      </div>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuView;
