"use client";
import { useAuth } from "@/context/AuthContext";
import { createOrder } from "@/helpers/orders.helper";
import { Pathroutes } from "@/helpers/PathRoutes";
import { IProduct } from "@/interface/IProduct";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const Cart: React.FC = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const { dataUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalCart = 0;
      storedCart.forEach((product: IProduct) => {
        totalCart += product.price;
      });
      setTotal(totalCart);
      setCart(storedCart);
    }
  }, []);

  const handleCheckOut = async () => {
    const idProducts = cart.map((product) => product.id);
    await createOrder(idProducts, dataUser?.token!);
    alert("Buy successful");
    setCart([]);
    setTotal(0);
    localStorage.removeItem("cart");
    router.push(Pathroutes.DASHBOARD);
  };

  const handleRemoveProduct = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    const updatedTotal = updatedCart.reduce((acc, product) => acc + product.price, 0);
    setCart(updatedCart);
    setTotal(updatedTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen mx-4 bg-black py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
        <div className="space-y-6">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center space-x-4 border-b pb-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
                <p className="text-gray-800 font-semibold">${product.price?.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemoveProduct(product.id)}
                className="text-red-600 hover:text-red-800"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Total: ${total.toFixed(2)}</h2>
          <button
           className="w-full py-3 m-2 text-white bg-black border rounded-md hover:bg-pink-0 hover:text-black"
           onClick={handleCheckOut}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
