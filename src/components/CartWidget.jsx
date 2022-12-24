import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to={`/cart`}>
        <div>
          <BsCart3 className="navCartIcon" />
          <div className="qty-display">5</div>
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
