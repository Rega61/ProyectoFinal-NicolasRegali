import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.nombre || !buyer.email || !buyer.telefono) {
      alert("Completa todos los campos");
      return;
    }

    const order = {
      buyer,
      items: cart.map(({ id, nombre, precio, quantity }) => ({
        id,
        nombre,
        precio,
        quantity,
      })),
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      alert(`Compra realizada! ID: ${docRef.id}`);
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  if (cart.length === 0) {
    return <h2 className="text-center mt-5">Carrito vacío</h2>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="form-control mb-2"
          value={buyer.nombre}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          value={buyer.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          className="form-control mb-3"
          value={buyer.telefono}
          onChange={handleChange}
        />

        <h3>Total a pagar: ${getTotalPrice()}</h3>

        <button className="btn btn-success mt-3">Finalizar compra</button>
      </form>
    </div>
  );
}

export default Checkout;
