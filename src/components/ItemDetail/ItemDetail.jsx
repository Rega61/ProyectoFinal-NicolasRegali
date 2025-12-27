import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

function ItemDetail({ item }) {
  const [agregado, setAgregado] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (cantidad) => {
    addItem(item, cantidad);
    setAgregado(true);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{item.nombre}</h3>

          <p className="card-text mb-1">
            <strong>Marca:</strong> {item.marca}
          </p>

          <p className="card-text mb-1">
            <strong>Estado:</strong> {item.estado}
          </p>

          <p className="card-text mb-2">
            <strong>Precio:</strong> ${item.precio}
          </p>

          <p className="card-text text-muted">
            Stock disponible: {item.stock}
          </p>

          {!agregado ? (
            <ItemCount stock={item.stock} onAdd={handleAdd} />
          ) : (
            <div className="mt-3">
              <p className="text-success">
                Producto agregado al carrito
              </p>

              <Link to="/cart" className="btn btn-success me-2">
                Ir al carrito
              </Link>

              <Link to="/" className="btn btn-outline-secondary">
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
