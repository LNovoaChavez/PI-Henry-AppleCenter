"use client"
import React from "react";
import { Pathroutes } from "@/helpers/PathRoutes";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Asegúrate de importar tu contexto de autenticación

interface AddToCartButtonProps {
    productId: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId }) => {
    const router = useRouter();
    const { dataUser } = useAuth(); // Obtener datos de usuario del contexto de autenticación

    const handleAddToCart = () => {
        // Verificar si hay una sesión activa
        if (!dataUser?.token) {
            // Si no hay sesión, redirigir al usuario al login
            alert("You must be logged in to add to cart")
            router.push(Pathroutes.LOGIN);
        } else {
            // Implementar la lógica para agregar el producto al carrito (aún por desarrollar)
            // Puedes implementar aquí la funcionalidad para agregar al carrito
            console.log(`Adding product with ID ${productId} to cart...`);
        }
    };

    return (
        <button
            onClick={handleAddToCart}
            className="bg-black text-white hover:bg-pink-0 hover:text-black focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2"
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
