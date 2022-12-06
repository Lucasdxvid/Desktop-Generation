import { useState } from "react";
import { useEffect } from "react";
import Product from "../src/components/ItemList";
import { data } from "./data";
import { fetchData } from "./FetchData";

const Products = () => {
  //Aqui tenemos el estado datos del componente "Products" que lo seteamos con el resultado de la promesa ("el array de productos llamado data")
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetchData(2000, data)
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
