import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const brands = ["Apple", "Samsung", "Xiaomi"];

function NavBar() {
  const linkClass = ({ isActive }) =>
    isActive ? "dropdown-item active" : "dropdown-item";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <NavLink to="/" className="navbar-brand fw-bold">
        Store de Celulares
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">

          {/* MARCAS */}
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-link text-white"
              data-bs-toggle="dropdown"
              type="button"
            >
              Marcas
            </button>

            <ul className="dropdown-menu">
              {brands.map((brand) => (
                <li key={brand}>
                  <NavLink
                    to={`/brand/${brand}`}
                    className={linkClass}
                  >
                    {brand}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

        </ul>

        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
