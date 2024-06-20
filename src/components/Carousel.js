import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        &#10096;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10097;
      </button>
      <ul>
        {images.map((image, index) => (
          <li
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <figure>
              <img src={images[currentSlide]} />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
