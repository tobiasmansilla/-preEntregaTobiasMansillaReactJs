import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';


export default function ItemDetail({ products }) {
  const { title, price, categoryId, img, description} = products;

  const [loadCart, setLoadCart] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    setLoadCart(true);
    addItem(products, quantity)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'ARS', 
      minimumFractionDigits: 0. 
    }).format(price);
  };

  return (
    <div className="detalle">
      <img src={img} alt={title} className="detalleImg" />
      <div className="detalleTexto">
        <h4>{title}</h4>
        <p className="categorys">{categoryId}</p>
        <p className="parrafo">Descripción: {description}</p>
        <p className="price">Precio por unidad: $ {formatPrice(price)}</p>
        <p className="totalPrice">Precio total: $ {formatPrice(price * quantity)}</p>
        <div>
          {loadCart ? (
            <Link to='/cart' className="botonDetalle" >Finalizar compra</Link>
          ) : (
            <ItemCount initial={0} stock={12} onAdd={onAdd}  setQuantity={setQuantity}/>
          )}
        </div>
      </div>
    </div>
  );
}