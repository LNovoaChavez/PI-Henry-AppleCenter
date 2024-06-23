import Card from "../card"

import productsPreload from "@/helpers/productsPreLoads"
import Cards from "../cards"

const HomeContainer = () => {
    return <div>
        Soy home
        <Cards products={productsPreload}/>
        
    </div>
//si tengo otro componente que requiere esta info simplemene se lo paso por acá
}

export default HomeContainer