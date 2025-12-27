import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return <h2 className="text-center mt-5">Carrito vacío</h2>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Carrito</h1>

      {cart.map((prod) => (
        <div key={prod.id} className="border rounded p-3 mb-3">
          <h5>{prod.nombre}</h5>

          <p className="mb-1">
            <strong>Estado:</strong> {prod.estado}
          </p>
          <p className="mb-1">Cantidad: {prod.quantity}</p>
          <p className="mb-1">Precio unitario: ${prod.precio}</p>
          <p className="mb-2">
            <strong>Subtotal:</strong> ${prod.precio * prod.quantity}
          </p>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeItem(prod.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <h3 className="mt-4">Total: ${getTotalPrice()}</h3>

      <div className="mt-3">
        <button className="btn btn-warning me-2" onClick={clearCart}>
          Vaciar carrito
        </button>

        <Link to="/checkout" className="btn btn-success">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
}

export default Cart;
