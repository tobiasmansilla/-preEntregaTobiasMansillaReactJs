import { useCart } from '../CartContext';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item, quantity);
        alert(`Se agregaron ${quantity} ${item.name} al carrito`);
    };

    return (
        <div className="item-detail">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min="1"
            />
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;