import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export default function CartWidget() {
    const { totalProducts } = useCartContext();

    return (
        <>
            <Link
                to='/cart'
                className="cartWidget"
                style={{ display: totalProducts() > 0 ? 'block' : 'none' }}
            ><i className="bi bi-cart3"></i>
                {totalProducts() > 0 && <span>{totalProducts()}</span>}
            </Link>
        </>
    );
}