import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../utils/ProductsData";
import fetchData from "../utils/FetchData";
import ProductDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idProduct } = useParams();

  useEffect(() => {
    if (idProduct) {
    fetchData(0, ProductsData.filter(item => item.id == idProduct))
      .then((response) => setDatos(response))
      .catch((err) => console.log(err));
  } else {
    fetchData(0, ProductsData)
      .then((response) => setDatos(response))
      .catch((err) => console.log(err));
  }}, [idProduct]);

  return (
    <>
      {datos.map((item) => (
        <ProductDetail
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

export default ItemDetailContainer;
