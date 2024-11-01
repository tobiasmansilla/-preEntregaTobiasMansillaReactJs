import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { cart } = useCart();

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/cart" className="cart-widget">
            🛒 {itemCount > 0 && <span>{itemCount}</span>}
        </Link>
    );
};

export default CartWidget;