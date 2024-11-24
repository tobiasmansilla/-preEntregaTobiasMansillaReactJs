import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../firebase/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";


export default function ItemDetailContainer() {
  const [products, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getOneProduct(id);
        if (productData) {
          setProduct(productData);
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (products === null) return (
    <div className="loader">
      <Loader />
    </div>
  );

  return (
    <>
      {products ? (
        <ItemDetail products={products} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </>
  );
}