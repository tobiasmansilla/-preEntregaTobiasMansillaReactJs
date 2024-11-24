import { useEffect, useState } from 'react';
import "./ItemCount.css";
import Swal from 'sweetalert2';

export default function ItemCount({ initial, stock, onAdd, setQuantity }) {
  const [numero, setNumero] = useState(parseInt(initial));

  const handleClickSuma = () => {
    if (numero < stock) {
      setNumero(numero + 1);
      setQuantity(numero + 1);
    }
  };

  const handleClickResta = () => {
    if (numero > 1) {
      setNumero(numero - 1);
      setQuantity(numero - 1);
    }
  };

  useEffect(() => {
    setNumero(parseInt(initial));
  }, [initial]);


  const handleAddToCart = () => {
    onAdd(numero);
    Swal.fire({
      title: '¡Producto agregado!',
      text: `Has agregado ${numero} productos al carrito.`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="ItemCountContainer"> {/*el contador y el botón*/}
      <div className="ItemCount">
        <button className="suma" disabled={numero >= stock} onClick={handleClickSuma}>+</button>
        <p>{numero}</p>
        <button className="resta" disabled={numero <= 1} onClick={handleClickResta}>-</button>
      </div>
      <button className="agregar" disabled={stock <= 0} onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}