import InnerImageZoom from "react-inner-image-zoom";
import {
  FcMoneyTransfer,
  FcShop,
  FcOvertime,
  FcNumericalSorting12,
  FcCurrencyExchange,
} from "react-icons/fc";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToCart } = useContext(CartContext); // se accede a la funcion global
  const onAdd = (qty) => {
    // notificamos al usuario la cantidad de productos agregados;
    notify(qty);
    setItemCount(qty);
    // Aqui ejecutamos la funcion global anteriormente creada
    addToCart(item, qty);
  };

  const formatMoney = (num) => {
    return " " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  const notify = (x) => toast("Añadiste un total de " + x + " producto/s.");

  return (
    <>
      {item && item.thumbnail ? (
        <section className="detailMainContainer">
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <article className="detailCard">
            <h2 className="detailTitle">{item.title}</h2>
            <div className="detailContent">
              <InnerImageZoom
                src={`${item.thumbnail}`}
                zoomSrc={`${item.thumbnail}`}
                className="detailImage"
              />
              <div className="detailAvailability">
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcMoneyTransfer className="shopIcon" />{" "}
                    <span className="detailContentSpan">Precio Contado: </span>{" "}
                    <span className="detailPriceSimbol">$</span>
                    {formatMoney(item.price)}
                  </p>
                </div>
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcCurrencyExchange className="shopIcon" />{" "}
                    <span className="detailContentSpan">Precio de Lista:</span>{" "}
                    <span className="detailPriceSimbol">$</span>
                    {formatMoney(item.priceList)}
                  </p>
                </div>
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcNumericalSorting12 className="shopIcon" />{" "}
                    <span className="detailContentSpan">Stock:</span>{" "}
                    {item.stock}
                  </p>
                </div>
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcOvertime className="shopIcon" />{" "}
                    <span className="detailContentSpan">Garantía:</span>{" "}
                    {item.warranty}
                  </p>
                </div>
                <div className="detailTextDiv">
                  <p className="detailContentText">
                    <FcShop className="shopIcon" />{" "}
                    <span className="detailContentSpan">Retiro:</span> ¡GRATIS!
                  </p>
                  <p className="detailContentTextShip">
                    Tucumán - San Miguel De Tucumán
                  </p>
                </div>
                <div className="detailDescriptionDiv">
                  <h3 className="detailDescriptionTitle">
                    Descripción del{" "}
                    <span className="detailPriceSimbol"> Producto</span>
                  </h3>
                  <p className="detailContentText">{item.description}</p>
                </div>
                {itemCount === 0 ? (
                  <ItemCount
                    stock={item.stock}
                    initial={itemCount}
                    onAdd={onAdd}
                  />
                ) : (
                  <Link to="/cart">
                    <button className="btn productViewBtn addToCartBtn">
                      Ver Carrito
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </article>
        </section>
      ) : (
        <section className="spinnerMainContainer">
          <Spinner animation="border" size="sm" />
        </section>
      )}
    </>
  );
};

export default ProductDetail;
