import ItemListContainer from "./components/itemlistcontainer";
import NavCustom from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AppStyle from "./style/App.css";

const App = () => {
  return (
    <>
      <NavCustom />
      <ItemListContainer message="Esto es el ItemListContainer" />
    </>
  );
};

export default App;
