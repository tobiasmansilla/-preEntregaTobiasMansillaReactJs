import { useCart } from '../CartContext';

const AddItemButton = ({ item, quantity }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item, quantity);
        alert(`Se agregaron ${quantity} ${item.name} al carrito`);
    };

    return (
        <button onClick={handleAddToCart}>
            Agregar al carrito
        </button>
    );
};

export default AddItemButton;