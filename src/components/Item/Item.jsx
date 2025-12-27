import { Link } from "react-router-dom";

function Item({ id, nombre, precio, marca, estado }) {
  return (
    <div className="card mb-3 h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{nombre}</h5>

          <p className="card-text mb-1">
            <strong>Marca:</strong> {marca}
          </p>

          <p className="card-text mb-1">
            <strong>Estado:</strong> {estado}
          </p>

          <p className="card-text fw-bold">
            ${precio}
          </p>
        </div>

        <Link to={`/item/${id}`} className="btn btn-primary mt-2">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
