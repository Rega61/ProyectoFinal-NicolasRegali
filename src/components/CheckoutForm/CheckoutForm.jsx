import { useState } from "react";

function CheckoutForm({ onConfirm }) {
  const [buyer, setBuyer] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.nombre || !buyer.telefono || !buyer.email) {
      alert("Completa todos los campos");
      return;
    }

    onConfirm(buyer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={buyer.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input
          type="text"
          name="telefono"
          className="form-control"
          value={buyer.telefono}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={buyer.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Confirmar compra
      </button>
    </form>
  );
}

export default CheckoutForm;
