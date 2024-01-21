import React, { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import mainBG from "../assets/main-img.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="">
      <div className="w-full flex items-center justify-center gap-10 lg:gap-24">
        <div className=" bg-gradient-to-r from-black to-slate-500 mb-14 lg:mb-20">
          <img
            src={mainBG}
            alt="main-img"
            className="w-screen h-[500px] lg:h-[600px] object-cover border-none  shadow-2xl brightness-50"
          />
          <div className="relative">
            <div className="leading-[100px] absolute left-16 max-md:left-8 bottom-16">
              <h1 className="text-[100px] max-md:text-6xl lg:text-[120px] lg:leading-[150px] text-white font-bold capitalize">
                brescia
                <br /> grameen
              </h1>
              <div className="mt-6 pl-4 max-md:pl-2 lg:pt-10">
                <Link to="/about">
                  <p className="text-white  hover:text-slate-400 text-xl max-md:text-[22px] flex items-center gap-3 lg:text-3xl font-medium">
                    Discover
                    <span className="w-[50px] h-[50px] flex items-center justify-center bg-gray rounded-full">
                      <HiArrowRight width={24} className="text-black" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//absolute top-1/4 right-1/2 translate-x-1/2 translate-y-1/4
//absolute left-0 top-0 brightness-50 rounded-lg z-[-10] object-fill w-full h-auto
