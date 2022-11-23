import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <div>
        <BsCart3 className="navCartIcon" />
        <div className="qty-display">5</div>
      </div>
    </>
  );
};

export default CartWidget;
