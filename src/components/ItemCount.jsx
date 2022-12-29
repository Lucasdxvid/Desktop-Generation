import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, []);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="countContainer">
        <button className="btn productViewBtn countBtn" onClick={decrement}>
          -
        </button>{" "}
        <span className="countText">{count}</span>{" "}
        <button className="btn productViewBtn countBtn" onClick={increment}>
          +
        </button>
      </div>
      {stock && count ? (
        <button
          onClick={() => onAdd(count)}
          className="btn productViewBtn addToCartBtn"
        >
          Añadir al carro
        </button>
      ) : (
        <button className="btn productViewBtn addToCartBtn" disabled>
          -
        </button>
      )}
    </>
  );
};

export default ItemCount;
