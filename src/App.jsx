import ItemListContainer from "./components/itemlistcontainer";
import NavCustom from "./components/Navbar";

const App = () => {
  return (
    <>
      <NavCustom />
      <ItemListContainer message="Esto es el ItemListContainer" />
    </>
  );
};

export default App;
