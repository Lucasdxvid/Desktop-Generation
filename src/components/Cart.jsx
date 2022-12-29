import { useContext } from "react";
import { CartContext } from "./CartContext";
import { serverTimestamp } from "firebase/firestore";
import {
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartList, deleteProduct, calcTotalPerItem } = useContext(CartContext); //En su parametro, el hook recibira el contexto a utilizar

  const myContext = useContext(CartContext);

  const createOrder = () => {
    Swal.fire({
      customClass: "hola",
      title: "¿Todo listo?",
      text: "Recuerda que puedes cancelar tu compra en cualquier momento",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, comprar",
      cancelButtonText: "No, espera",
      color: "white",
      background: "#1a1919",
    }).then((result) => {
      if (result.isConfirmed) {
        const order = {
          buyer: {
            username: "anonymous",
            email: "generic_mail@gmail.com",
            phone: "+54 9 381 341 444",
          },
          date: serverTimestamp(), //Esta es una funcion de fireStore que nos permite obtener la fecha y hora exacta al clickear
          item: myContext.cartList.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            qty: item.qty,
          })),
          total: myContext.calcTotal(),
        };
        console.log(order);
        const crtOrderFireStore = async () => {
          const newOrderRef = doc(collection(db, "orders")); // aca le decimos que de esta orders db me cree nuevos datos con su id generada
          await setDoc(newOrderRef, order);
          return newOrderRef;
        };

        crtOrderFireStore()
          .then((result) => {
            Swal.fire(
              "¡Gracias!",
              "Tu orden de compra: " + result.id + " fue creada con exito",
              "success"
            );
            myContext.cartList.forEach(async (item) => {
              const itemRef = doc(db, "products", item.id);

              await updateDoc(itemRef, {
                stock: increment(-item.qty), // el - evita que sume (resta)
              });
            });
            // Borramos todos los productos luego de una compra exitosa y actualizamos el stock
            myContext.removeList();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const formatMoney = (num) => {
    return " " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

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
                      <span className="detailContentSpan">Precio C/U: </span>
                      <span className="detailPriceSimbol">$</span>
                      {formatMoney(item.price)}
                    </p>
                    <p>
                      {" "}
                      <span className="detailContentSpan">Precio Total: </span>
                      <span className="detailPriceSimbol">$</span>
                      {formatMoney(calcTotalPerItem(item.id))}
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
                  {formatMoney(myContext.calcSubTotal())}
                </p>
                <p>
                  {" "}
                  <span className="detailContentSpan">IVA</span>(21%){" "}
                  <span className="detailContentSpan">: </span>
                  <span className="detailPriceSimbol">$</span>
                  {formatMoney(myContext.calcTaxes())}
                </p>
                <p>
                  {" "}
                  <span className="detailContentSpan">Total: </span>
                  <span className="detailPriceSimbol">$</span>
                  {formatMoney(myContext.calcTotal())}
                </p>
              </div>
              <div className="buttonsDiv">
                <button
                  className="btn productViewBtn removeAllBtn"
                  onClick={createOrder}
                >
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
