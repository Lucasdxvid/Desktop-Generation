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
                    <p>
                      <span className="detailContentSpan">Cantidad:</span>{" "}
                      {item.qty}
                    </p>
                    <p>
                      <span className="detailContentSpan">Precio C/U:</span>
                      <span className="detailPriceSimbol"> $</span>
                      {item.price}
                    </p>
                    <p>
                      {" "}
                      <span className="detailContentSpan">Precio Total:</span>
                      <span className="detailPriceSimbol"> $</span>
                      {calcTotalPerItem(item.id)}
                    </p>
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
                <p>
                  {" "}
                  <span className="detailContentSpan">Subtotal:</span>
                  <span className="detailPriceSimbol"> $</span>
                  {myContext.calcSubTotal()}
                </p>
                <p>
                  {" "}
                  <span className="detailContentSpan">IVA</span>(21%){" "}
                  <span className="detailContentSpan">:</span>
                  <span className="detailPriceSimbol"> $</span>
                  {myContext.calcTaxes()}
                </p>
                <p>
                  {" "}
                  <span className="detailContentSpan">Total:</span>
                  <span className="detailPriceSimbol"> $</span>
                  {myContext.calcTotal()}
                </p>
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
