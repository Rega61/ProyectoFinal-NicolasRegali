// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin"; // asegurate de que exista este archivo

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Página principal */}
          <Route path="/" element={<ItemListContainer />} />

          {/* Filtrado por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          {/* Filtrado por marca */}
          <Route path="/brand/:brandId" element={<ItemListContainer />} />

          {/* Detalle de producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* Carrito y checkout */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Admin */}
          <Route path="/admin" element={<Admin />} />

          {/* Ruta no encontrada */}
          <Route
            path="*"
            element={<h2 className="text-center mt-5">Página no encontrada</h2>}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
