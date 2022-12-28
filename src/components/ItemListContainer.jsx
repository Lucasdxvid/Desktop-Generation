import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Product from "./ItemList";
import Spinner from "react-bootstrap/Spinner";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams(); // Este hook de react router nos dice cual es ese "id" que nos envian mediante la url

  useEffect(() => {
    const fetchFromFireStore = async () => {
      let q;
      if (idCategory) {
        q = query(
          collection(db, "products"),
          where("categoryId", "==", parseInt(idCategory))
        );
      } else {
        // si es "undefined" me devuelve todos los productos al filtrar
        q = query(collection(db, "products"));
      }
      const querySnapshot = await getDocs(q);
      const dataFromFireStore = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      })); // transformamos un array de documentos a uno de objetos
      return dataFromFireStore;
    };
    fetchFromFireStore()
      .then((result) => setDatos(result))
      .catch((error) => console.log(error));
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
