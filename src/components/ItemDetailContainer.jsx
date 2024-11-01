import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById } from '../mock/async-mocks';
import HomeLink from './HomeLink';
import './ItemDetailContainer.css';
import { useCart } from '../CartContext';
import Toast from './Toast';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getItemDetail = async () => {
            const data = await fetchItemById(itemId);
            setItem(data);
        };
        getItemDetail();
    }, [itemId]);

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 15)) {
            setQuantity(value);
        }
    };

    const handleBuy = () => {
        if (item) {
            if (quantity === '0' || quantity === 0) {
                setToastMessage('Error: La cantidad no puede ser 0');
                setIsError(true);
            } else {
                addToCart(item, parseInt(quantity));
                setToastMessage(`Se agregó ${quantity} ${item.name} al carrito`);
                setIsError(false);
            }
            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
    };

    return (
        <div className="item-detail-container">
            {item ? (
                <div className="item-card-large">
                    <img src={item.image} alt={item.name} className="item-image-large" />
                    <h3 className="item-name-large">{item.name}</h3>
                    <p className="item-description-large">{item.description}</p>
                    <p className="item-price-large">Precio: ${item.price}</p>
                    <div className="quantity-control">
                        <label>Cantidad: </label>
                        <input 
                            type="number" 
                            min="0" 
                            max="15"
                            value={quantity} 
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <button 
                        className="item-details-button-large"
                        onClick={handleBuy}
                    >
                        Comprar
                    </button>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
            <HomeLink />

            <Toast 
                message={toastMessage}
                show={showToast}
                isError={isError}
            />
        </div>
    );
};

export default ItemDetailContainer;