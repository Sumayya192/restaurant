import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="font-sans">
     
      <header 
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-6" 
        style={{ backgroundImage: "url('/images/Text-Messages-for-Restaurants.jpg')" }}
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-bold">Welcome to Delight</h2>
          <p className="mt-4 text-lg font-bold">Experience the taste of perfection</p>
        
          <Link 
            to="/home" 
            className="mt-6 inline-block bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500"
          >
            Explore Menu
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Index;
