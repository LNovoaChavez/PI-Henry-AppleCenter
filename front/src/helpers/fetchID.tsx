"use client"
import { FetchProductsById } from "@/helpers/productFetch";
import { IProduct } from "@/interface/IProduct";
import { useEffect, useState } from "react";

const useFetchProductById = (productID: string) => {
    const [product, setProduct] = useState<IProduct>();

    const fetchData = async () => {
        const fetchedProduct = await FetchProductsById(productID);
        setProduct(fetchedProduct);
    };

    useEffect(() => {
        fetchData();
    }, [productID]);

    return product;
};

export default useFetchProductById