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
    <div className="relative h-[50vh]">
      <button
        className="absolute bg-none outline-none border-none z-10 text-4xl cursor-pointer text-black translate-y-1/2 top-1/2 -left-1"
        onClick={prevSlide}
      >
        &#10096;
      </button>
      <button
        className="absolute bg-none outline-none border-none z-10 text-4xl cursor-pointer text-black translate-y-1/2 top-1/2 -right-1"
        onClick={nextSlide}
      >
        &#10097;
      </button>
      <ul>
        {images.map((image, index) => (
          <li
            key={index}
            className={`flex justify-center absolute h-full w-full opacity-0 list-none transition duration-400 ease-in-out ${
              index === currentSlide ? "opacity-100" : ""
            }`}
          >
            <figure className="w-full max-w-[250px] flex flex-col justify-center items-center">
              <img
                src={images[currentSlide]}
                className="w-full h-full object-cover rounded-3xl mb-3.5 shadow-custom-grey"
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
