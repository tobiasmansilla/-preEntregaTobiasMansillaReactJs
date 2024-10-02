import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, description }) => {
    return (
        <div className="item-card-small">
            <img src={image} alt={name} className="item-image" />
            <h3 className="item-name">{name}</h3>
            <p className="item-description">{description}</p>
            <Link to={`/item/${id}`} className="item-details-button">Ver Detalles</Link>
        </div>
    );
};

export default Item;