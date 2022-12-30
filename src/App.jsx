import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavCustom from "./components/Navbar";
import FooterCustom from "./components/Footer";
import CartContextProvider from "./components/CartContext";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./style/App.css";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavCustom />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:idCategory" element={<MainContent />} />
          <Route
            path="/productDetail/:idProduct"
            element={<ItemDetailContainer />}
          />
        </Routes>
        <FooterCustom />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
