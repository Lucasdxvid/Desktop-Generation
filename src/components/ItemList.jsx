import { Link } from "react-router-dom";

const Product = ({ id, title, price, stock, thumbnail, description }) => {
  const formatMoney = (num) => {
    return " " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  return (
    <>
      {
        <article className="productCard">
          <img
            src={thumbnail}
            alt="Imagen del producto"
            className="productImage"
          />
          <p className="productStock">stock: {stock}</p>
          <div className="productContent">
            <h3 className="productTitle">{title}</h3>
            <p className="productPrice">
              <span className="priceTag">Precio: </span>
              <span className="detailPriceSimbol">$</span> {formatMoney(price)}
            </p>
          </div>
          <Link to={`/productDetail/${id}`}>
            <button type="button" className="btn productViewBtn">
              Ver Más
            </button>
          </Link>
        </article>
      }
    </>
  );
};

export default Product;
