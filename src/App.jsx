import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
// import ItemListContainer from "./components/ItemListContainer";
import NavCustom from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavCustom />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/category/:idCategory" element={<MainContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
