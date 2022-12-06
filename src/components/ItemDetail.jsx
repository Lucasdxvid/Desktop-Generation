import { Link } from "react-router-dom";

const ProductDetail = ({ item }) => {
  return (
    <>
      <article className="productCard">
        <img
          src={item.thumbnail}
          alt="Imagen del producto"
          className="productImage"
        />
        <p className="productStock">stock: {item.stock}</p>
        <div className="productContent">
          <h3 className="productTitle">{item.title}</h3>
          <p className="productPrice">
            <span className="priceTag">Precio: </span> $ {item.price}
          </p>
        </div>
      </article>
    </>
  );
};

export default ProductDetail;
