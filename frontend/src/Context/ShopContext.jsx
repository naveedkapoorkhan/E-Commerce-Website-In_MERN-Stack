import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // Ensure all_product is an array; if it's undefined, default to an empty array
    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
