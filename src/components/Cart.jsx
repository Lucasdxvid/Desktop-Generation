import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartList, deleteProduct, calcTotalPerItem } = useContext(CartContext); //En su parametro, el hook recibira el contexto a utilizar

  const myContext = useContext(CartContext);

  return (
    <>
      <main className="cartMainContainer">
        <section className="prodCartSection">
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
              </div>
            ))
          )}
        </section>
        {cartList.length === 0 ? (
          <p>tu carrito esta vacio </p>
        ) : (
          <section className="orderCartSection">
            <div className="orderCard card">
              <h3 className="h3order">Orden de productos:</h3>
              <div className="cartTotalDiv">
                <p>Subtotal: ${myContext.calcSubTotal()}</p>
                <p>IVA (21%): ${myContext.calcTaxes()}</p>
                <p>Total: ${myContext.calcTotal()}</p>
              </div>
              <div className="buttonsDiv">
                <button className="btn productViewBtn removeAllBtn">
                  Comprar
                </button>
                <button
                  onClick={myContext.removeList}
                  className="btn productViewBtn removeAllBtn"
                >
                  Borrar todo
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Cart;
