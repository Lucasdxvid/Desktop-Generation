import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const {
    cartList,
    deleteProduct,
    removeList,
    calcTotalPerItem,
    calcSubTotal,
    calcTaxes,
    calcTotal,
  } = useContext(CartContext); //En su parametro, el hook recibira el contexto a utilizar

  return (
    <>
      <section className="cartMainContainer">
        {cartList.length === 0 ? (
          <section className="cartMainContainer">
            <p>tu carrito esta vacio </p>
          </section>
        ) : (
          cartList.map((item) => (
            <div className="productsCartContainer" key={item.id}>
              <img src={item.thumbnail} alt="" className="cartProductImg"/>
              <div className="productCartSecondContainer">
                <h2>{item.title}</h2>
                <p>cantidad: {item.qty}</p>
              </div>
              <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
              <button onClick={() => removeList(item)}>Todo</button>
              <p>subtotal producto: {calcTotalPerItem(item.id)}</p>
              {/* <p>subtotal: {calcSubTotal(item.id)}</p>
                <p>iva: {calcTaxes(item.id)}</p>
                <p>total de todo: {calcTotal(item.price)}</p>  */}
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default Cart;
