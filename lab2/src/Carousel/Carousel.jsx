import React, { Component } from "react";
import image1 from "../assets/images/flower1.jpg";
import image2 from "../assets/images/flower2.jpg";
import image3 from "../assets/images/flower3.jpg";
import styles from "./Carousel.module.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      isAutoSliding: true,
    };
  }

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  startAutoSlide = () => {
    this.setState({
      isAutoSliding: true,
    });

    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 1000);
  };

  stopAutoSlide = () => {
    this.setState({
      isAutoSliding: false,
    });

    clearInterval(this.carouselInterval);
  };

  nextSlide = () => {
    const { currentSlide } = this.state;
    this.setState({
      currentSlide: (currentSlide + 1) % 3, 
    });
  };

  goToSlide = (index) => {
    this.setState({
      currentSlide: index,
    });
  };

  render() {
    const { currentSlide, isAutoSliding } = this.state;

    return (
      <>
        <h4 className="text-center mt-1">Autoplaying Images Slider</h4>
        <div className="container w-75 mt-2">
          <div className="carousel">
            <div className="carousel-indicators">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => this.goToSlide(index)}
                  className={index === currentSlide ? "active" : ""}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {[image1, image2, image3].map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === currentSlide ? "active" : ""
                  }`}
                >
                  <img
                    src={image}
                    className={styles.CarouselImg}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <button
              className="btn btn-success"
              type="button"
              onClick={() => this.goToSlide((currentSlide - 1 + 3) % 3)}
            >
              Previous
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={() => this.goToSlide((currentSlide + 1) % 3)}
            >
              Next
            </button>
            <button
              className="btn btn-success"
              type="button"
              onClick={this.startAutoSlide}
              disabled={isAutoSliding}
            >
              Start
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.stopAutoSlide}
              disabled={!isAutoSliding}
            >
              Stop
            </button>
          </div>
        </div>
      </>
    );
  }
}
