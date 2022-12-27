import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Product from "./ItemList";
import Spinner from "react-bootstrap/Spinner";

const ItemListContainer = () => {
  //Aqui tenemos el estado datos del componente "ProductsData" que lo seteamos con el resultado de la promesa ("el array de productos llamado data")
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams(); // Este hook de react router nos dice cual es ese "id" que nos envian mediante la url

  useEffect(() => {
    const fetchFromFireStore = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    fetchFromFireStore();
  }, [idCategory]); // El array vacio se comporta como un component didMount pero necesitamos que comporte como didUpdate por lo que colocamos idCategory como argumento del useEffect provocando que cada que mande otro ID se ejecute el mismo de nuevo

  return (
    <>
      {datos.length > 0 ? (
        datos.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            stock={item.stock}
            price={item.price}
            thumbnail={item.thumbnail}
            description={item.description}
          />
        ))
      ) : (
        <section className="spinnerMainContainer">
          <Spinner animation="border" size="sm" />
        </section>
      )}
    </>
  );
};

export default ItemListContainer;
