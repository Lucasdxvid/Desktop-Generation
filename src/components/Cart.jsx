import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartList, deleteProduct } = useContext(CartContext); //En su parametro, el hook recibira el contexto a utilizar

  return (
    <>
      <section className="detailMainContainer">
        <h1>Tu carrito: 🎯</h1>

        <ul>
          {cartList.length === 0 ? (
            <p> tu carrito esta vacio </p>
          ) : (
            cartList.map((item) => (
              <li key={item.id}>
                {item.title} - cantidad: {item.qty}
                <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
              </li>
            ))
          )}
        </ul>
      </section>
    </>
  );
};

export default Cart;
