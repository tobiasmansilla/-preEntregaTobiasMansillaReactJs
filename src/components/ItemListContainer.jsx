import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import HomeLink from './HomeLink';
import { fetchItemsByCategory, fetchAllItems } from '../mock/async-mocks';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            let data;
        if (categoryId) {
            console.log('Fetching by category:', categoryId);
            data = await fetchItemsByCategory(categoryId);
        } else {
            console.log('Fetching all items');
            data = await fetchAllItems();
        }
        console.log('Data received:', data);
        setItems(data);
        setLoading(false);
        };
        getItems();
    }, [categoryId]);

    return (
    <div className="item-list-container">
        <h2>{greeting || (categoryId ? `Categoría: ${categoryId.toUpperCase()}` : "Todos los Ítems")}</h2>
        {loading ? ( <p>Cargando...</p> ) : (
        <div className="items-grid">
            {items.length > 0 ? (
            items.map(item => (
            <Item key={item.id} id={item.id} name={item.name} image={item.image} />
            ))) : ( <p>No hay ítems disponibles en esta categoría.</p> )
            }
        </div>
        )}
        <HomeLink />
    </div>
);
};

export default ItemListContainer;
