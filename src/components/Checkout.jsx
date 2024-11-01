import { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [buyerInfo, setBuyerInfo] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyerInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert("No puedes realizar una compra con el carrito vacío");
            return;
        }

        const order = {
            buyer: buyerInfo,
            items: cart,
            total: getCartTotal(),
            date: new Date().toISOString()
        };
        
        const simulatedOrderId = Math.random().toString(36).substr(2, 9);
        setOrderId(simulatedOrderId);
        clearCart();
    };

    if (orderId) {
        return (
            <div className="success-message">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: {orderId}</p>
                <button onClick={() => navigate('/')}>Volver al inicio</button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="order-summary">
                <h3>Resumen de tu orden:</h3>
                {cart.map(item => (
                    <div key={item.id}>
                        <p>{item.name} - Cantidad: {item.quantity} - ${item.price * item.quantity}</p>
                    </div>
                ))}
                <p><strong>Total: ${getCartTotal()}</strong></p>
            </div>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={buyerInfo.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={buyerInfo.phone}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={buyerInfo.email}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    );
};

export default Checkout;