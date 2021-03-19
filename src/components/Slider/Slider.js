import React, { useState } from "react";
import "./Slider.css";
import SliderData from "./SliderData";

const Slider = ({ slides = SliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  setTimeout(nextSlide, 2000);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Mobile image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
