import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    const fetchSingleFromFireStore = async () => {
      //Aqui necesitamos consultarle al FireStore por el producto a traves de su idProduct
      const docRef = doc(db, "products", idProduct);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: idProduct,
          ...docSnap.data(),
        };
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchSingleFromFireStore()
      .then((result) => setDato(result))
      .catch((error) => console.log(error));
  }, []);

  return <ProductDetail item={dato} />;
};

export default ItemDetailContainer;
