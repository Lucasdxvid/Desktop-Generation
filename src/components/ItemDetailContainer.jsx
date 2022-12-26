import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../utils/ProductsData";
import fetchData from "../utils/FetchData";
import ProductDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    fetchData(
      2000,
      ProductsData.find((item) => item.id === parseInt(idProduct))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return <ProductDetail item={dato} />;
};

export default ItemDetailContainer;
