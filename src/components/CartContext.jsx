import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(); // children hace referencia a todos los componentes que estan dentro del contextProvider (englobados) en app.jsx utilizandoselos como una prop

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]); // El mismo arranca siendo un estado local para luego promoverlo a un estado global (value = cartList)

  const addToCart = (item) => {
    setCartList([...cartList, item]); // con esto le decimos que coloque los elementos que ya tiene en carro, agregue el nuevo item y convierta eso en el nuevo estado
  };

  const deleteProduct = (id) => {
    const withoutProduct = cartList.filter((item) => item.id !== id);
    setCartList(withoutProduct);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
