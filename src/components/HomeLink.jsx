import { Link } from 'react-router-dom';

const HomeLink = () => {
const style = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#646cff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    zIndex: 1000
};

return (
    <Link to="/" style={style}>
        Volver al Inicio
    </Link>
);
};

export default HomeLink;