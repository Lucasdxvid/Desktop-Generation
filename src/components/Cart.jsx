import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartList } = useContext(CartContext); //En su parametro, el hook recibira el contexto a utilizar

  return (
    <>
      <section className="detailMainContainer">
        <h1>Tu carrito: 🎯</h1>
        <ul>
          {cartList.length === 0 ? (
            <p> tu carrito esta vacio </p>
          ) : (
            cartList.map((item) => <li key={item.id}>el nombre es: {item.title}</li>)
          )}
        </ul>
      </section>
    </>
  );
};

export default Cart;
