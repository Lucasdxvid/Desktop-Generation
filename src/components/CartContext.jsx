import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(); // children hace referencia a todos los componentes que estan dentro del contextProvider (englobados) en app.jsx utilizandoselos como una prop

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]); // El mismo arranca siendo un estado local para luego promoverlo a un estado global (value = cartList)

  const addToCart = (item, qty) => {
    setCartList([
      ...cartList,
      {
        id: item.id,
        image: item.image,
        title: item.title,
        price: item.price,
        qty: qty,
      },
    ]); // con esto le decimos que coloque los elementos que ya tiene en carro, agregue el nuevo item y convierta eso en el nuevo estado
  };

  const deleteProduct = (id) => {
    const withoutProduct = cartList.filter((item) => item.id !== id);
    setCartList(withoutProduct);
  };

  const removeList = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteProduct, removeList }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
