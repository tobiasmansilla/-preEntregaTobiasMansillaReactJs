import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
        return <p className="empty-cart-message">No hay items en el carrito</p>;
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">Tu Carrito</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                        <p className="cart-item-price">Precio: ${item.price}</p>
                        <p className="cart-item-total">Total: ${item.price * item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)} className="cart-button clear">Eliminar</button>
                    </div>
                </div>
            ))}
            <p className="cart-total">Total: ${getCartTotal()}</p>
            <div className="cart-buttons">
                <button onClick={clearCart} className="cart-button clear">Vaciar carrito</button>
                <Link to="/checkout">
                    <button className="cart-button checkout">Finalizar compra</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;