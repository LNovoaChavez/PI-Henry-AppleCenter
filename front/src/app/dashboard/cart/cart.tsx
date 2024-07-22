"use client"
import { useAuth } from "@/context/AuthContext";
import { createOrder } from "@/helpers/orders.helper";
import { IProduct } from "@/interface/IProduct";
import { useEffect, useState } from "react";

const Cart: React.FC = () => {

  const [ cart, setCart ] = useState<IProduct[]>([])
  const [ total, setTotal ] = useState<number>(0)
  const { dataUser } = useAuth()

  useEffect(() =>{
    const storedCart= JSON.parse(localStorage.getItem("cart") || "[]")
    if (storedCart) {
      let totalCart = 0;
      storedCart.forEach((product: IProduct) => {
        totalCart += product.price
      });
      setTotal(totalCart)
      setCart(storedCart)
    }
  }, [])

  const handleCheckOut = async () => {
    const idProducts = cart.map((product) => product.id)
    await createOrder(idProducts, dataUser?.token!)
    alert("Buy sucssful")
    setCart([])
    setTotal(0)
    localStorage.setItem("cart", "[]")
  }

  return (
  <div>
    <h1>Your Cart</h1>
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
    <div>
      <h2>Total: {total}</h2>
      <button className="w-full py-3 text-black bg-white border border-black rounded-md hover:bg-pink-0 hover:text-black" onClick={handleCheckOut}>Checkout</button>
    </div>

  </div>
  )
    

  };
  
export default Cart