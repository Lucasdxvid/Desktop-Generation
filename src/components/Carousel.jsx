import { GiPreviousButton, GiNextButton } from "react-icons/gi";

function CustomCarousel() {
  return (
    <>
      <section className="carouselSection">
        <div className="indexCarrusel">
          <div
            id="carouselExampleDark"
            className="carousel carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                className="billProgress"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <figure className="carousel-item active" data-bs-interval="3500">
                <img
                  src="https://res.cloudinary.com/drsheqkfv/image/upload/v1672420110/Desktop%20Generation/carrusel/img1_cxcycl.webp"
                  className="d-block w-100 carouselImg"
                  alt="Summer Game Fest"
                />
                <div className="carousel-caption billText">
                  <h3 className="billH3">
                    Rapidez y más con la nueva gama RTX
                  </h3>
                  <figcaption className="billP">
                    Consigue ultra rendimiento y haz que tus juegos y proyectos
                    creativos cobren vida con el ray tracing y los gráficos
                    basados ​​en IA.
                  </figcaption>
                </div>
              </figure>
              <figure className="carousel-item" data-bs-interval="3500">
                <img
                  src="https://res.cloudinary.com/drsheqkfv/image/upload/v1672419889/Desktop%20Generation/carrusel/img2_kobg6v.jpg"
                  className="d-block w-100 carouselImg"
                  alt="AC Valhalla"
                />
                <div className="carousel-caption billText">
                  <h3 className="billH3">
                    Descubre y conquista los reinos rotos de Inglaterra y haz
                    crecer tu leyenda vikinga
                  </h3>
                  <figcaption className="billP">
                    Consigue Assassin's Creed Valhalla con una selección de GeForce
                    RTX™ serie 30*.
                  </figcaption>
                </div>
              </figure>
              <figure className="carousel-item" data-bs-interval="3500">
                <img
                  src="https://res.cloudinary.com/drsheqkfv/image/upload/v1672420459/Desktop%20Generation/carrusel/img3_gipykb.webp"
                  className="d-block w-100 carouselImg"
                  alt="AMD Ryzen CPU"
                />
                <div className="carousel-caption billText">
                  <h3 className="billH3">Cambia tu forma de jugar</h3>
                  <figcaption className="billP">
                    Acelera tu experiencia de juego con la nueva tecnología de
                    la serie AMD Ryzen 7000. Saca a relucir la velocidad
                    descomunal de “Zen 4” y su potencia.
                  </figcaption>
                </div>
              </figure>
              <figure className="carousel-item" data-bs-interval="3500">
                <img
                  src="https://res.cloudinary.com/drsheqkfv/image/upload/v1672420459/Desktop%20Generation/carrusel/img4_qtfpud.jpg"
                  className="d-block w-100 carouselImg"
                  alt="Corsair logo"
                />
                <div className="billTextContainer">
                  <div className="carousel-caption billText">
                    <h3 className="billH3">Solo en Desktop Generation</h3>
                    <figcaption className="billP">
                      ¡Nueva gama de productos corsair ya disponibles para su
                      compra!
                    </figcaption>
                  </div>
                </div>
              </figure>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <GiPreviousButton className="carouselIco" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <GiNextButton className="carouselIco" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomCarousel;
