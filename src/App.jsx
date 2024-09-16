import Navbar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <ItemListContainer greeting="Bienvenido/a a Music Store!" />
        </div>
    );
}

export default App;
