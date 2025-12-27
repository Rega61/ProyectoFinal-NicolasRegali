import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(prod => prod.id === item.id);
      if (itemInCart) {
        return prevCart.map(prod =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // FUNCIÓN CORRECTA PARA USAR EN CARTWIDGET
  const getTotalQuantity = () => {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, prod) => total + prod.precio * prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// HOOK PERSONALIZADO PARA USAR EL CONTEXT
export const useCart = () => useContext(CartContext);
