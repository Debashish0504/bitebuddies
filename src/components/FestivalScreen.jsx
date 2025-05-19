import React from "react";
import FestivalCarousel from "./FestivalCarousel";

const allFestivalConfigs = {
  Maharashtra: {
    festival: "Ganesh Chaturthi",
    slides: [
      {
        
        imageUrl: "https://www.freeiconspng.com/uploads/lord-ganesh-png-28.png",
        title: "Ganesh Idols",
        description: "Eco-friendly idols for home and pandals.",
      },
      {
        imageUrl: "https://www.freeiconspng.com/uploads/bonfire-flames-festival-transparent-0.png",
        title: "Decorations",
        description: "Traditional décor sets for your celebration.",
      },
    ],
  },
  TamilNadu: {
    festival: "Pongal",
    slides: [
      {
        imageUrl: "https://www.freeiconspng.com/uploads/bonfire-clip-art-3.png",
        title: "Clay Pots",
        description: "Colorful Pongal pots for your kitchen.",
      },
    ],
  },
};

const getFestivalConfig = (state) => {
  return allFestivalConfigs[state] || null;
};

const FestivalScreen = ({ userState }) => {
  const config = getFestivalConfig(userState);

  if (!config) {
    return (
      <div className="p-6 text-center text-gray-500">
        <h2 className="text-xl font-semibold mb-2">No Offers Available</h2>
        <p>We're currently not running any festive offers for your state.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-6">
        <FestivalCarousel config={config} />
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Festive Offers</h2>
        <ul className="space-y-2">
          <li className="border p-2 rounded">Up to 50% off on Home Decor</li>
          <li className="border p-2 rounded">Buy 1 Get 1 on Traditional Wear</li>
          <li className="border p-2 rounded">Special Sweets Combo for ₹499</li>
        </ul>
      </div>
    </div>
  );
};

export default FestivalScreen;
