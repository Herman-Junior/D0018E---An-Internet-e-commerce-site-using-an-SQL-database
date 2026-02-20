import React, { createContext } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const currency = 'EUR';
    const products = [];

    const value = { products, currency };

    return (
    <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
    );
}