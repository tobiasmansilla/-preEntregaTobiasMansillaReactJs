import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemById } from '../mock/async-mocks';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getItemDetail = async () => {
            const data = await fetchItemById(itemId);
            setItem(data);
        };
        getItemDetail();
    }, [itemId]);

    return (
        <div className="item-detail-container">
            {item ? (
                <div className="item-card-large">
                    <img src={item.image} alt={item.name} className="item-image-large" />
                    <h3 className="item-name-large">{item.name}</h3>
                    <p className="item-description-large">{item.description}</p>
                    <p className="item-price-large">Precio: ${item.price}</p>
                    <button className="item-details-button-large">Comprar</button>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;