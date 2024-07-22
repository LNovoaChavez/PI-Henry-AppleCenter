"use client";
import { FetchProductsById } from "@/helpers/productFetch";
import { IProduct } from "@/interface/IProduct";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pathrouthes } from "@/helpers/PathRoutes";
import { useAuth } from "@/context/AuthContext"; // Asegúrate de importar tu contexto de autenticación

const ProductID = ({
    params: { productID },
}: {
    params: { productID: string };
}) => {
    const router = useRouter();
    const { dataUser } = useAuth(); // Obtener datos de usuario del contexto de autenticación

    const [product, setProduct] = useState<IProduct>();

    const fetchData = async () => {
        const fetchedProduct = await FetchProductsById(productID);
        setProduct(fetchedProduct);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToCart = (e: any) => {
        // Verificar si hay una sesión activa
        if (!dataUser) {
            // Si no hay sesión, redirigir usuario al login
            alert("You must be logged in to add to cart")
            router.push(Pathrouthes.LOGIN);
        } else {
            // Implementar lógica para agregar el producto al carrito 
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            // Verificar si el producto ya existe en el carrito
            const productExist = cart.some((product: IProduct) => {
                if (product.id === parseInt(e.target.id)) {
                    return true;
                } else {
                    return false;
                }
            });
            if (productExist) {
                alert("Product already in cart");
                router.push(Pathrouthes.CART);
            } else {
                cart.push(product); // Agregar al array
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Product added to cart");
                router.push(Pathrouthes.CART);
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-black shadow-lg rounded-lg overflow-hidden my-10">
            <div className="lg:w-1/2 p-4 flex justify-center items-center">
                <img
                    src={product?.image}
                    alt={product?.name}
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="lg:w-1/2 p-6">
                <div className="mb-4">
                    <h2 className="text-3xl font-semibold">{product?.name}</h2>
                    <p className="text-xl text-gray-600">${product?.price}</p>
                </div>
                <p className="mb-6 text-white">{product?.description}</p>
                
                <button
                    id={product?.id?.toString()}
                    onClick={handleAddToCart}
                    className="w-full py-3 text-black bg-white border border-black rounded-md hover:bg-pink-0 hover:text-black"
                >
                    Add to Cart
                </button>
                <div className="mt-4">
                    <p className="text-gray-600 mt-2">Available: {product?.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductID;
