import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const test = useContext(CartContext);
  return (
    <>
      <Link to={`/cart`}>
        <div>
          <BsCart3 className="navCartIcon" />
          <div className="qty-display">{test.calcItemsQty()}</div>
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
