import Products from "../../utils/products";

const ItemListContainer = (props) => {
  return (
    <>
      <main className="mainContainer">
        <section className="productSection">
          <Products />
        </section>
      </main>
    </>
  );
};

export default ItemListContainer;
