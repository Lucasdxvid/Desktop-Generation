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

  const myContext = useContext(CartContext);

  return (
    <>
      <section className="cartMainContainer">
        {cartList.length === 0 ? (
          <p>tu carrito esta vacio </p>
        ) : (
          cartList.map((item) => (
            <div className="productsCartContainer" key={item.id}>
              <img src={item.thumbnail} alt="" className="cartProductImg" />
              <div className="cartProdTitleContainer">
                <h2 className="cartProductTitle">{item.title}</h2>
                <div className="productsCartSecondContainer">
                  <p>cantidad: {item.qty}</p>
                  <p>precio c/u: ${item.price}</p>
                  <p>precio total: ${calcTotalPerItem(item.id)}</p>
                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="btn productViewBtn"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              {/* <button onClick={() => removeList(item)}>Todo</button> */}
              {/* <p>subtotal: {calcSubTotal(item.id)}</p>
                <p>iva: {calcTaxes(item.id)}</p>
                <p>total de todo: {calcTotal(item.price)}</p>  */}
            </div>
          ))
        )}
        <button onClick={myContext.removeList}>Todo</button>
      </section>
    </>
  );
};

export default Cart;
