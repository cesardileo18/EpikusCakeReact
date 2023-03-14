import Item from "../../Item/Item";
import Carousel from "react-bootstrap/Carousel";
const ItemList = ({ bestSeller }) => {
  return (
    <main className="d-flex flex-column">
      <Carousel>
        <Carousel.Item interval={1000}>
            <div className="imgCarrusel1 slide"></div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <div className="imgCarrusel2 slide"></div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="imgCarrusel3 slide"></div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="imgCarrusel4 slide"></div>
        </Carousel.Item>
      </Carousel>
      <section className="cards">
        <div className="container-fluid">
          <div className="row">
            <div className="page-header my-3">
              <h1 className="text-center">Los mas vendidos</h1>
            </div>
            <div className="d-flex justify-content-evenly flex-wrap mb-5">
              {bestSeller.map((bestSelle, index) => {
                return <Item key={index} {...bestSelle} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ItemList;
