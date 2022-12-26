import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(); // children hace referencia a todos los componentes que estan dentro del contextProvider (englobados) en app.jsx utilizandoselos como una prop

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]); // El mismo arranca siendo un estado local para luego promoverlo a un estado global (value = cartList)

  const addToCart = (item, qty) => {
    let found = cartList.find((product) => product.id === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          qty: qty,
        },
      ]);
    } else {
      //al encontrarlo, entonces aumentamos el qty de ese producto
      found.qty += qty;
      setCartList([...cartList]);
    }
  };
  const deleteProduct = (id) => {
    const withoutProduct = cartList.filter((item) => item.id !== id);
    setCartList(withoutProduct);
  };

  const removeList = () => {
    setCartList([]);
  };

  const calcItemsQty = () => {
    let qtys = cartList.map((item) => item.qty);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteProduct, removeList, calcItemsQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
