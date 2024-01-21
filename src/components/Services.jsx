import React from "react";
import { serviceData } from "../data";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="bg-white pb-16 flex flex-col gap-8 px-24 max-md:px-4">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div
            data-aos="fade-up"
            data-aos-duration="2400"
            className="max-md:text-left"
          >
            <h1 className="text-yellow  font-bold text-4xl lg:text-6xl max-md:text-2xl capitalize">
              why us ?
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="2800">
            <h1 className="text-main text-center text-7xl capitalize">
              Because we provide...
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-10 items-center justify-center ">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="bg-main text-white flex max-md:flex-col items-center max-md:justify-center max-md:text-center gap-4  p-4 rounded-lg shadow-xl lg:text-2xl capitalize"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              {item.icons({ size: 24 })}
              <Link to={item.to} key={item.id} passto>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section
        className="bg-gray py-16"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div
          className="flex flex-col gap-5 items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl text-center capitalize">
            need financial assistance to achieve your dream?
          </h1>
          <div data-aos="fade-up" data-aos-duration="2000">
            <button
              type="button"
              className="bg-main hover:opacity-60 rounded-lg lg:text-2xl text-white p-4 lg:p-6"
            >
              <a href="tel:+94763484719">Talk to us</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
