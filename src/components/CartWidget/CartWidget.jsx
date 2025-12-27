import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartWidget() {
  const { getTotalQuantity } = useCart();
  const total = getTotalQuantity();

  if (total === 0) return null;

  return (
    <NavLink to="/cart" className="btn btn-outline-light">
      🛒 {total}
    </NavLink>
  );
}

export default CartWidget;
