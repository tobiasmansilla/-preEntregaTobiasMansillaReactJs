import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { fetchItemsByCategory, fetchAllItems } from '../mock/async-mocks';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            let data;
            if (categoryId) {
                data = await fetchItemsByCategory(categoryId);
            } else {
                data = await fetchAllItems();
            }
            setItems(data);
        };
        getItems();
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h2>{greeting || (categoryId ? `Categoría: ${categoryId.toUpperCase()}` : "Todos los Ítems")}</h2>
            <div className="items-grid">
                {items.length > 0 ? (
                    items.map(item => (
                        <Item key={item.id} id={item.id} name={item.name} image={item.image} />
                    ))
                ) : (
                    <p>No hay ítems disponibles en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;
