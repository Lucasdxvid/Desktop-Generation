import ItemListContainer from "./ItemListContainer";
import CustomCarousel from "./Carousel";
import CategoriesDiv from "./CategoriesDiv";

const Main = () => {
  return (
    <>
      <main className="mainContainer">
        <CustomCarousel />
        <CategoriesDiv/>
        <section className="productSection">
          <ItemListContainer />
        </section>
      </main>
    </>
  );
};

export default Main;
