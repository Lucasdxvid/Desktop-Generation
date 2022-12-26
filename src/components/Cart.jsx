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
              <img src={item.thumbnail} alt="" className="cartProductImg" />
              <div className="cartProdTitleContainer">
                <h2 className="cartProductTitle">{item.title}</h2>
                <div className="productsCartSecondContainer">
                  <p>cantidad: {item.qty}</p>
                  <p>precio c/u: ${item.price}</p>
                  <p>precio total: ${calcTotalPerItem(item.id)}</p>
                  <button onClick={() => deleteProduct(item.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
              {/* 
              <button onClick={() => removeList(item)}>Todo</button> */}

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
