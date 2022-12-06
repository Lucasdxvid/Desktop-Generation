import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavCustom from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import "./style/App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/category/:idCategory" element={<MainContent />} />
          <Route path="/productDetail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
