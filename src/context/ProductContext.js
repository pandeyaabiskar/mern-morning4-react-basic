import { createContext } from "react";
import { useFetch } from "../utils/hooks";

export const ProductContext = createContext({});

function ProductProvider(props) {
    const { data, isLoading, isError } = useFetch('http://localhost:4000/api/products');

    return (
        <ProductContext.Provider value={{data, isLoading, isError}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;