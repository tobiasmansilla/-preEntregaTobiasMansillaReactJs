import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        setCart(currentCart => {
            const existingItemIndex = currentCart.findIndex(cartItem => cartItem.id === item.id);
            
            if (existingItemIndex >= 0) {
                const newCart = [...currentCart];
                newCart[existingItemIndex].quantity += quantity;
                return newCart;
            } else {
                return [...currentCart, { ...item, quantity }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCart(currentCart => currentCart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            getCartTotal 
        }}>
            {children}
        </CartContext.Provider>
    );
};