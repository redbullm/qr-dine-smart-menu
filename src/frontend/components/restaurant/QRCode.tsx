
import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "react-router-dom";

interface QRCodeProps {
  restaurantId?: string;
  restaurantName?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ 
  restaurantId = "demo-restaurant", 
  restaurantName = "Restaurant Name" 
}) => {
  const location = useLocation();
  
  // Get the base URL (removing any paths)
  const baseUrl = window.location.origin;
  
  // Create the menu URL that customers will visit when scanning the QR code
  const menuUrl = `${baseUrl}/menu/${restaurantId}`;

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="w-64 h-64 mx-auto flex items-center justify-center">
        <QRCodeSVG 
          value={menuUrl}
          size={240}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"}
          includeMargin={false}
        />
      </div>
      <p className="text-center mt-4 font-medium text-gray-700">
        {restaurantName}
      </p>
      <p className="text-center text-sm text-gray-500 mt-1">
        Scan to view menu
      </p>
    </div>
  );
};

export default QRCode;
