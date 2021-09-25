import Carousel from "react-bootstrap/Carousel";

export default function Jumbotron() {
  return (
    <div className=" row p-3 mb-4 bg-light rounded-3 align-items-center justify-content-around">
      <div className="m-2 p-5 col-lg-3 col-md-10 jumbotron-text">
        <h1 className="display-5 fw-bold">Soft Washing</h1>
        <p className="fs-4">That's what we do.</p>

        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
      <Carousel
        className="m-3 col-lg-7 col-md-10"
        fade
        prevLabel=""
        nextLabel=""
      >
        <Carousel.Item interval={5000}>
          <img
            src="before-after-house.jpg"
            className="d-block w-100"
            alt="before and after house"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src="before-after-siding.jpg"
            className="d-block w-100"
            alt="before and after siding"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            src="before-after-roof.jpg"
            className="d-block w-100"
            alt="before and after roof"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
