import productsPreload from "@/helpers/productsPreLoads"
import Card from "../card"
import { IProduct } from "@/interface/IProduct"

//para que sea mas reutilizable, recibimos arreglo y luego renderizamos y va a ser mas reutilizable y no estatica
//RECIBE UN PRODUCT QUE ES DE TIPO IPRODUCT
const Cards: React.FC <{products: IProduct[]}> = ({products}) => {
    return <div>
        {
            productsPreload.map((product) => {
                return (
                    <Card key={product.id} {...product}/>
                )
            })
        }
    </div>
}

export default Cards