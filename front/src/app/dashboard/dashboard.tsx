"use client"
import CartOrder from "@/components/cartOrders";
import LogoutButton from "@/components/logout";
import { useAuth } from "@/context/AuthContext";
import { getOrders } from "@/helpers/orders.helper";
import { useEffect, useState } from "react";
import Products from "../products/Products";
import { IOrders } from "@/interface/IOrders";


const UserCard: React.FC = () => {

  const [orders, setOrders] = useState<IOrders[]>([])
  const {dataUser} = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      const ordersRes = await getOrders(dataUser?.token!)
      setOrders(ordersRes)
    }
    dataUser?.token && fetchData()
  },[dataUser?.token])

  return (
    <div className="max-w-sm mx-auto my-10 bg-white border border-gray-0 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">

              <div className="uppercase tracking-wide text-m text-black font-semibold">
                <h2>{dataUser ?  dataUser?.user?.name : "username"}</h2>
              </div>
              <p className="mt-2 text-gray-500">Email: {dataUser ? dataUser?.user?.email : "mail@mail.com"}</p>
              <p className="mt-2 text-gray-500">Phone: {dataUser ? dataUser?.user?.phone : "12345678"}</p>
              <p className="mt-2 text-gray-500">Address: {dataUser ? dataUser?.user?.address : "calle 123"}</p>
              <LogoutButton/>
              {/* {orders.map((order) => (
                <CartOrder key={order.id} date= {order.date} order={orders.products}/>

              ))} */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
