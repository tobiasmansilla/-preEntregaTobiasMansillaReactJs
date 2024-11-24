import { Link } from 'react-router-dom';
import "./Item.css";

export default function Card({ products }) {
  const { id, title, price, categoryId, img } = products;



  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'ARS', 
      minimumFractionDigits: 0.
    }).format(price);
  };

  return (
    <div className="cardProducts">
      <div className='card'>
        <h4 className='cardTitle'>{title}</h4>
        <p className="categorys">{categoryId}</p>
        <img src={img} alt={title} className="cardImg" />
        <p className="price">Precio: $ {formatPrice(price)}</p>
        <button className="botonDetalle">
          <Link to={`/item/${id}`} className='verMas'>Ver más</Link>
        </button>
      </div>
    </div>
  );
}