import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartComponent from "../CartComponent/CartComponent";
import Swal from 'sweetalert2';
import "./Cart.css";

const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="cartVacio">
                <h2 className="cartVacio">El carrito está vacío</h2>
                <Link to='/' className="botonDetalle">Seguir comprando</Link>
            </div>

        );
    }

    const handleClearCart = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El carrito se ha vaciado.",
            confirmButtonText: "Aceptar"
        });
        clearCart();
    };


    return (
        <div className="cart">
            <h1 className="cartTitle">Tu carrito</h1>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <CartComponent products={product} />
                    </li>
                ))}
            </ul>
            <h2>Total: ${totalPrice()}</h2>
            <button className="botonDetalle" onClick={handleClearCart}>Vaciar carrito</button>
            <Link to='/checkout' className="botonDetalle" >Finalizar compra</Link>
        </div>
    );
}

export default Cart;