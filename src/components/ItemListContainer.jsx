import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../utils/ProductsData";
import fetchData from "../utils/FetchData";
import Product from "./ItemList";

const ItemListContainer = () => {
  //Aqui tenemos el estado datos del componente "ProductsData" que lo seteamos con el resultado de la promesa ("el array de productos llamado data")
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams(); // Este hook de react router nos dice cual es ese "id" que nos envian mediante la url

  useEffect(() => {
    if(idCategory) {
    fetchData(0, ProductsData.filter(item => item.categoryId == idCategory)) // Filter nos permitira sacar los elementos que no cumplan con la condicion
      .then((response) => setDatos(response))
      .catch((err) => console.log(err));
  } else { //? Es necesario un if else ya que al estar en la ruta raiz, "idCategory" posee el valor undefined, es decir que cuando recibo IdCategory hago el filtro, cuando no recibo todos
    fetchData(0, ProductsData)
    .then((response) => setDatos(response))
    .catch((err) => console.log(err));
  }}, [idCategory]); // El array vacio se comporta como un component didMount pero necesitamos que comporte como didUpdate por lo que colocamos idCategory como argumento del useEffect provocando que cada que mande otro ID se ejecute el mismo de nuevo

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

export default ItemListContainer;
