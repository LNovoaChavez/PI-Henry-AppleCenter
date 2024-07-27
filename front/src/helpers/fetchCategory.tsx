"use client"

import { IProduct } from "@/interface/IProduct"
import { useEffect, useState } from "react"
import { FetchProductsByCategory } from "./productFetch"


const useFetchProductByCategory = (productCategoryID: string) => {
    const [productC, setProductC] = useState<IProduct[]>([])

    const fetchData = async () => {
        const fetchedProductByCategory = await FetchProductsByCategory(productCategoryID)
        setProductC(fetchedProductByCategory)
    }

    useEffect(() => {
        fetchData()
    }, [productCategoryID])

    return productC
}

export default useFetchProductByCategory