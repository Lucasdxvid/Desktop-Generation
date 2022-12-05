import ItemListContainer from "./components/ItemListContainer";
import NavCustom from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";

const App = () => {
  return (
    <>
      <NavCustom />
      <ItemListContainer />
    </>
  );
};

export default App;
