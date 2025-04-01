
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";

// Mock menu items data
const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and our special sauce",
    price: 12.99,
    category: "Main Course",
    image: "https://placehold.co/100x100/FF7A50/FFFFFF/png?text=Burger"
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with croutons, parmesan, and Caesar dressing",
    price: 9.99,
    category: "Starters",
    image: "https://placehold.co/100x100/2A9D8F/FFFFFF/png?text=Salad"
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    price: 14.99,
    category: "Main Course",
    image: "https://placehold.co/100x100/F4A261/FFFFFF/png?text=Pizza"
  },
  {
    id: 4,
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie with vanilla ice cream",
    price: 6.99,
    category: "Desserts",
    image: "https://placehold.co/100x100/333333/FFFFFF/png?text=Brownie"
  }
];

const MenuList = () => {
  return (
    <div className="space-y-4">
      {menuItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className="h-20 w-20 object-cover"
              />
              <div className="p-4 flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                  </div>
                  <div className="text-lg font-bold">${item.price.toFixed(2)}</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <Badge variant="outline" className="bg-gray-100">
                    {item.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MenuList;
