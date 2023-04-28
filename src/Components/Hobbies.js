import React, { useState, useEffect } from "react";
import "./Hobbies.css";
import { SiSnapcraft } from "react-icons/si";
import { GiCook } from "react-icons/gi";
import { TbGardenCartOff } from "react-icons/tb";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div className="carouselCard">{children}</div>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interaval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
      updateIndex(activeIndex + 1);
    }, 6000);
    return () => {
      if (interaval) {
        clearInterval(interaval);
      }
    };
  });
  return (
    <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              <span className="buttonBar"></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className="hobbiesContainer">
      <h1>Hobbies</h1>
      <Carousel>
        <CarouselItem>
          <div className="itemInfo">
            <span>
              <SiSnapcraft />
            </span>
            <p>Craft Making</p>
          </div>

          <p className="hobbiesDescription">
            Creating own crafts to decorate the home walls and rooms. Also creating some gifts for birthday and functions.
          </p>
        </CarouselItem>
        <CarouselItem>
          <div className="itemInfo">
            <span>
              <GiCook />
            </span>
            <p>Experimenting in the Kitchen</p>
          </div>

          <p className="hobbiesDescription">Enjoy learning new cooking/ baking techniques and participating in local cooking competation</p>
        </CarouselItem>
        <CarouselItem>
          <div className="itemInfo">
            <span>
              <TbGardenCartOff />
            </span>
            <p>Gardening</p>
          </div>
          <p className="hobbiesDescription">Avid gardener growing my own seasonal fruits vegetables and flowers</p>
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Hobbies;
