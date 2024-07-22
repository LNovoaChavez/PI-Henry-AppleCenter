import { IProduct } from "@/interface/IProduct";

const apiURL = process.env.NEXT_PUBLIC_API_URL


export const FetchProducts = async () => {
    try {
        const res = await fetch(`${apiURL}/products`, {
            method: "GET",
            next: {revalidate: 3600}
        
        });
        const products: IProduct[] = await res.json();
        return products;

    } catch (error: any) {
        throw new Error(error)
    }
  };

export const FetchProductsById = async (id: string) => {
    try{
        const products = await FetchProducts()
        const product = products.find((product) => product?.id?.toString() === id)
        if(!product){
            throw new Error("Product not found")
        } 
        return product
    }catch (error:any){
        throw new Error(error)
    }
}