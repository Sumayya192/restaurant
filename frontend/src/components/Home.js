import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ cart, setCart }) => {  
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/foods")
      .then(response => setFoods(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleOrderNow = (food) => {
    setCart([...cart, food]); 
    navigate("/cart"); 
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200 text-center p-10">
      <h1 className="text-5xl font-extrabold text-yellow-900 drop-shadow-lg">🍽️ Our Special Menu</h1>
      <p className="text-lg text-yellow-800 mt-3 font-medium">Savor the best flavors, made with love 💛</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10">
        {foods.map((food, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-lg border border-yellow-500 w-80 mx-auto">
            <img src={food.imageUrl} alt={food.name} className="w-full h-48 object-cover rounded-lg border-2 border-yellow-400" />
            <h3 className="text-xl font-semibold mt-3 text-yellow-900">{food.name}</h3>
            <p className="text-lg font-bold text-yellow-700 mt-1">${food.price.toFixed(2)}</p>
            <button 
              onClick={() => handleOrderNow(food)}
              className="mt-4 bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 hover:bg-yellow-700"
            >
              Order Now (Take Out)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
