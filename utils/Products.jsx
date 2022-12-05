import { useState } from "react";
import { useEffect } from "react";
import Product from "../src/components/ItemList";
import { data } from "./data";
import { fetchData } from "./FetchData";

const Products = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetchData(0, data)
      .then((response) => setDatos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {datos.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          title={item.title}
          stock={item.stock}
          price={item.price}
          thumbnail={item.thumbnail}
          description={item.description}
        />
      ))}
    </>
  );
};

export default Products;
