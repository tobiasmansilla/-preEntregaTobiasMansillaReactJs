import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        let q;

        if (categoryId) {
          q = query(productsRef, where("categoryId", "==", categoryId));
        } else {
          q = productsRef;
        }

        const querySnapshot = await getDocs(q);
        const loadedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(loadedProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <>
      <div className="container">
        <ItemList products={products} />
      </div>
    </>
  );
}