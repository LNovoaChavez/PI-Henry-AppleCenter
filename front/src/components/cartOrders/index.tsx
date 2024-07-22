import { IOrders } from "@/interface/IOrders"
import { IProduct } from "@/interface/IProduct"

const CartOrder = (date: Date, orders: IProduct[]) => {
    return (
        <div>
            {/* <h2>{date}</h2> */}
            <div>
                {orders?.map((order) => (
                    <div key={order.id}>
                        <p>{order.name}</p>
                        <p>{order.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
 
export default CartOrder