import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { countryFlags } from "../utils";

const FlagSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 400,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden w-full">
      <Slider {...settings}>
        {countryFlags.map((flag) => (
          <div
            key={flag.name}
            className="py-16 gap-0 w-full flex justify-between items-center"
          >
            <a
              href={flag.url}
              target="_blank"
              className="min-w-0 flex gap-8 items-center justify-center"
            >
              <img
                src={flag.source}
                alt={flag.name}
                className="object-cover w-[300px] h-[300px]  rounded-full"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlagSlider;
