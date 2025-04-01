
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Settings, LogOut } from "lucide-react";

const RestaurantHeader = () => {
  return (
    <header className="w-full py-3 px-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/restaurant/dashboard" className="flex items-center gap-2">
          <span className="text-menu-primary font-poppins font-bold text-2xl">
            QR<span className="text-menu-secondary">Dine</span>
          </span>
          <span className="text-xs bg-menu-primary/10 text-menu-primary px-2 py-1 rounded-md">
            Restaurant Portal
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/restaurant/dashboard" className="text-gray-700 hover:text-menu-primary">
            Dashboard
          </Link>
          <Link to="/restaurant/menu" className="text-gray-700 hover:text-menu-primary">
            Menu Management
          </Link>
          <Link to="/restaurant/reviews" className="text-gray-700 hover:text-menu-primary">
            Reviews
          </Link>
          <Link to="/restaurant/settings" className="text-gray-700 hover:text-menu-primary">
            Settings
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarFallback className="bg-menu-primary text-white">
                    <UtensilsCrossed className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Restaurant</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/restaurant/profile" className="cursor-pointer flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500 flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;
