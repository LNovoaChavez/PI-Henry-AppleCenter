// "use client"

// import { useEffect, useState } from "react";
// import { FetchCategories } from "./productFetch";

// interface ICategory {
//     id: string,
//     name: string
// }

// const useFetchCategories = () => {
//     const [categories, setCategories] = useState<ICategory[]>([]);

//     const fetchData = async () => {
//         try {
//             const fetchedCategories = await FetchCategories(); 
//             setCategories(fetchedCategories);
//             console.log(fetchedCategories);
            
//         } catch (error) {
//             console.error("Error fetching categories:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return categories;
// }

// export default useFetchCategories;
