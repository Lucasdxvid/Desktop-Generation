import ItemListContainer from "./ItemListContainer";
import CustomCarousel from "./Carousel";

const Main = () => {
  return (
    <>
      <main className="mainContainer">
        <CustomCarousel />
        <section className="productSection">
          <ItemListContainer />
        </section>
      </main>
    </>
  );
};

export default Main;
