import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const incrementar = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const decrementar = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="mt-3">
      <p className="text-muted mb-1">
        Stock disponible: {stock}
      </p>

      <div className="d-flex align-items-center mb-2">
        <button
          className="btn btn-outline-secondary"
          onClick={decrementar}
          disabled={count === 1}
        >
          -
        </button>

        <span className="mx-3">{count}</span>

        <button
          className="btn btn-outline-secondary"
          onClick={incrementar}
          disabled={count === stock}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-success"
        onClick={handleAdd}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>

      {stock === 0 && (
        <p className="text-danger mt-2">
          Producto sin stock
        </p>
      )}
    </div>
  );
}

export default ItemCount;
