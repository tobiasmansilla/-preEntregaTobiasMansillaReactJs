import './Toast.css';

const Toast = ({ message, show, isError }) => {
    if (!show) return null;

    return (
        <div className={`toast ${isError ? 'error' : 'success'}`}>
            {message}
        </div>
    );
};

export default Toast;