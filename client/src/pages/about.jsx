import React from "react";
import { Link } from "react-router-dom";

import bgGroup from "../assets/mains/BG-group.png";
import bresciaLiquor from "../assets/services/liquor-shop.jpg";
import bresciaPub from "../assets/services/pub.jpg";
import bresciaMart from "../assets/services/supermarket.jpg";
import serviceImage from "../assets/services/service-image.png";

const About = () => {
  return (
    <section className="bg-dark-gray h-full lg:px-16 py-10 lg:py-12">
      <div className="space-y-6 2xl:max-w-5xl 2xl:mx-auto w-full">
        <div className="flex flex-col gap-6 lg:gap-4 lg:text-center">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-[#C5BB6A] lg:leading-[64px] leading-snug font-bold text-2xl lg:text-5xl text-center ">
            Brescia - The success of Negombo…
          </h1>
          <p className="text-white lg:text-[20px] text-center ">
            Brescia Grameen (Pvt.) Ltd is well known in the field of finance a
            few decades ago, Completion of solid 35 years built on trust and
            social integration in the local community has laid the foundation
            for several decades to come. In considering the prevailing economic
            conditions, we understood the dire need for organic growth and
            diversification of business risk. Thus, by 2014 Brescia Grameen was
            transformed in to a Group of Companies investing in diverse
            industries. This resulted in diversifying the business risk, as is
            deemed necessary to reduce the overall risk to business success.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 pt-16">
          <h1 className="text-3xl lg:text-5xl text-center text-white font-extrabold pb-10">
            Brescia Group of Companies
          </h1>
          <img
            src={bgGroup}
            width={500}
            height={500}
            className="max-md:w-[350px]"
            alt="brescia grameen"
          />
        </div>
        {/* <div className="pb-32">
          <h1 className="text-3xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-orange text-center lg:text-left to-[#C5BB6A]">
            SOON TO BE OPENED
          </h1>
          <div className="flex flex-col gap-24 lg:gap-32 pt-12 lg:pt-16">
            <div className="lg:flex flex-col items-center justify-center gap-12 lg:gap-20">
              <img
                src={bresciaLiquor}
                width={400}
                height={400}
                className="object-cover"
                alt="bresciaLiquor"
              />
              <h1 className="capitalize text-white font-bold italic  text-4xl pt-6 lg:pt-0">
                brescia liquor shop
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row-reverse gap-12 lg:gap-20 ">
              <img
                src={bresciaPub}
                width={400}
                height={350}
                className="object-contain"
                alt="bresciaPub"
              />
              <h1 className="capitalize text-white font-bold italic  text-4xl pt-6 lg:pt-0">
                brescia pub & restaurant
              </h1>
            </div>
            <div className="lg:flex flex-col items-center justify-center gap-12 lg:gap-20">
              <img
                src={bresciaMart}
                width={400}
                height={400}
                className="object-contain"
                alt="bresciaMart"
              />
              <h1 className="capitalize text-white font-bold italic text-4xl pt-6 lg:pt-0">
                brescia supermarket
              </h1>
            </div>
          </div>
        </div> */}
        <div className="lg:gap-16 gap-10 pt-16">
          <div className="flex flex-col lg:flex-row  items-center justify-center w-full p-4">
            <div className="flex flex-1 flex-col">
              <h1 className="text-3xl text-center lg:text-left lg:text-4xl font-bold text-primary-orange pb-10">
                Our valuable service to our customers
              </h1>
              <p className="text-white pb-16 lg:pb-0 text-center lg:text-left lg:text-[20px] font-regular ">
                Brescia Grameen serves our valued customers like a bank.We take
                only half the processing time as compared to banks if all
                supporting documents are intact as they observe the requirements
                based on priority.Reinvesting profits, high return on
                investments, maximum utilization of resources and treating
                customers with respect are strengths of Brescia Grameen.
              </p>
              <div className="flex flex-col lg:flex-row w-full text-center gap-3 lg:mt-4 ">
                <button className="text-center bg-primary-orange hover:bg-opacity-90 text-white  py-1.5 px-2">
                  <Link to="/contact">Register</Link>
                </button>
                <button className="text-center bg-transparent border border-primary-orange capitalize text-primary-orange hover:bg-primary-orange hover:text-white py-1.5 px-2">
                  <Link to="/services/work-visa">read more</Link>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:w-full">
              <img
                src={serviceImage}
                width={200}
                height={200}
                className="object-cover w-80 h-80"
                alt="serviceImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
