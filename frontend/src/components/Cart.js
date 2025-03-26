import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const placeOrder = () => {
        if (cart.length === 0) {
            alert("❌ Your cart is empty!");
            return;
        }
    
        const orderData = {
            name: "Cart Order",
            price: cart.reduce((acc, item) => acc + item.price, 0),
            type: "takeout"
        };
    
        if (cart.some(item => item.imageUrl)) {
            orderData.imageUrl = cart[0].imageUrl; 
        }
    
        axios.post("http://localhost:5000/api/orders", orderData)
            .then(() => {
                alert("✅ Order Placed Successfully!");
                setCart([]); 
                navigate("/");
            })
            .catch(() => alert("❌ Error placing order."));
    };
    
    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-center p-10">
            <h1 className="text-4xl font-bold text-gray-800">🛒 Your Cart</h1>
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
                {cart.length === 0 ? (
                    <p className="text-lg text-gray-600">Your cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className="flex justify-between items-center py-2 border-b">
                                    <span className="text-lg text-gray-800">{item.name}</span>
                                    <span className="text-yellow-700 font-semibold">${item.price.toFixed(2)}</span>
                                    <button 
                                        onClick={() => removeItem(index)}
                                        className="ml-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                                    >
                                         Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 text-xl font-bold text-gray-900">
                            Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                        </div>
                        <div className="flex justify-center gap-4 mt-6">
                            <button 
                                onClick={() => navigate("/home")}
                                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition"
                            >
                                 Back to Menu
                            </button>
                            <button 
                                onClick={placeOrder}
                                className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition"
                            >
                                 Confirm Order
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
