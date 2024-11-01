import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';


const App = () => {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestro catálogo!" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;