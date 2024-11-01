const Brief = () => {
    // Aquí iría la lógica para obtener los ítems del carrito y calcular el total
    const cartItems = []; // Esto debería venir de tu estado global o context
    const total = 0; // Esto debería calcularse basado en los ítems del carrito

    return (
        <div className="brief">
            <h3>Resumen de Compra</h3>
            {cartItems.map(item => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.quantity} x ${item.price}</span>
                </div>
            ))}
            <div>
                <strong>Total: ${total}</strong>
            </div>
        </div>
    );
};

export default Brief;