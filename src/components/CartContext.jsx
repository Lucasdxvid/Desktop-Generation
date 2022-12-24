import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(); // children hace referencia a todos los componentes que estan dentro del contextProvider (englobados) en app.jsx utilizandoselos como una prop

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]); // El mismo arranca siendo un estado local para luego promoverlo a un estado global (value = cartList)

  const addToCart = (item) => {
    setCartList([item]);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
