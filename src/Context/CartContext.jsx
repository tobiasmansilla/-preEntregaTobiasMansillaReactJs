import React, { useContext, useState, useCallback } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = useCallback((item, quantity) => {
        if (isInCart(item.id)) {
            setCart(prevCart =>
                prevCart.map(product =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + quantity }
                        : product
                )
            );
        } else {
            setCart(prevCart => [...prevCart, { ...item, quantity }]);
        }
    }, []);

    const totalProducts = useCallback(() =>
        cart.reduce((total, product) => total + product.quantity, 0),
        [cart]
    );

    const totalPrice = useCallback(() =>
        cart.reduce((prev, act) => prev + act.quantity * act.price, 0),
        [cart]
    );

    const clearCart = useCallback(() => setCart([]), []);

    const isInCart = (id) =>
        cart.some(product => product.id === id);

    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(product => product.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, clearCart, isInCart, removeItem, addItem, totalProducts, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;