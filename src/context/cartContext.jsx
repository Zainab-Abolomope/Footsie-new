import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart((prevCart) => prevCart.map(product =>
            product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        ));
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) => prevCart.map(product =>
            product.id === productId && product.quantity > 1
                ? { ...product, quantity: product.quantity - 1 }
                : product
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
