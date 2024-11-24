import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW_S3yxes0MsaFLmxfKe37b_6_RO0Bk3w",
  authDomain: "react-js-reentrega-final.firebaseapp.com",
  projectId: "react-js-reentrega-final",
  storageBucket: "react-js-reentrega-final.firebasestorage.app",
  messagingSenderId: "476886093851",
  appId: "1:476886093851:web:e2f5090bedfc15c30168be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

//obtener un producto
export async function getOneProduct(id) {
  const documentRef = doc(db, 'products', id);

  try {
    const snapshot = await getDoc(documentRef);
    if (snapshot.exists()) {
      return {
        id: snapshot.id,
        ...snapshot.data()
      }
    } else {
      console.log('El documento no existe!');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

//obtener toda una coleccion
export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

//filtros de precio
export async function filterProductsByCategory(categoryId) {
  try {
    const filteredQuery = query(
      collection(db, 'products'),
      where('categoryId', '<', categoryId)
    );
    const querySnapshot = await getDocs(filteredQuery);
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((docu) => {
        return {
          id: docu.id,
          ...docu.data(),
        };
      });
      return productsList;
    } else {
      console.log('Coleccion vacía !');
    }
  } catch (error) {
    console.error('Error al obtener el documento: ', error);
  }
}

//enviar una nueva orden de pedido
export async function sendOrder(order) {
  const ordersCollection = collection(db, 'orders');

  try {
    const docRef = await addDoc(ordersCollection, order);
    console.log('Nueva orden generada: ' + docRef.id);
    return docRef.id;
  } catch (error) {
    console.log('Error al agregar el documento: ' + error);
  }
}



