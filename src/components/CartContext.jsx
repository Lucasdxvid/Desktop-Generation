import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(); // children hace referencia a todos los componentes que estan dentro del contextProvider (englobados) en app.jsx utilizandoselos como una prop

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]); // El mismo arranca siendo un estado local para luego promoverlo a un estado global (value = cartList)

  const addToCart = (item, qty) => {
    let searchExistent = cartList.find((product) => product.id === item.id);
    if (searchExistent === undefined) {
      setCartList([
        ...cartList,
        {
          id: item.id,
          thumbnail: item.thumbnail,
          title: item.title,
          price: item.price,
          qty: qty,
        },
      ]);
    } else {
      //al encontrarlo, entonces aumentamos el qty de ese producto
      searchExistent.qty += qty;
      setCartList([...cartList]);
    }
  };
  const deleteOneProduct = (id) => {
    const withoutProduct = cartList.filter((item) => item.id !== id);
    setCartList(withoutProduct);
  };

  const clearCart = () => {
    setCartList([]);
  };

  const calcProductsPerQty = () => {
    let qtys = cartList.map((item) => item.qty);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const calcTotalPerProducts = (id) => {
    let index = cartList.map((item) => item.id).indexOf(id);
    return cartList[index].price * cartList[index].qty;
  };

  const calcSubTotal = () => {
    let totalPerItem = cartList.map((item) => calcTotalPerProducts(item.id));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  const calcTaxes = () => {
    return calcSubTotal() * 0.21;
  };

  const calcTotal = () => {
    return calcSubTotal() * 1.21;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteOneProduct,
        clearCart,
        calcProductsPerQty,
        calcTotalPerProducts,
        calcSubTotal,
        calcTaxes,
        calcTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
