import { useState } from "react";
import "./CheckoutForm.css";
import Checkout from "../Checkout/Checkout";

export default function CheckoutForm({ onConfirm }) {
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor, completa todos los campos.");
      return;
    }


    onConfirm(buyer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div className="feed-form">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={buyer.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="feed-form">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={buyer.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="feed-form">
        <label>Teléfono</label>
        <input
          type="tel"
          name="phone"
          value={buyer.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <button onClick={(<Checkout />)} type="submit">Confirmar compra</button>
    </form>
  );
}