import React from "react";
import { Link } from "react-router-dom";

import AboutCard from "./aboutCard";
import customers from "../assets/mains/customers.png";

import { IoDiamondOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";

const About = () => {
  return (
    <section className="bg-white max-md:p-5 lg:px-16 lg:py-14 ">
      <div className="flex items-start max-md:flex-col max-md:gap-6 2xl:max-w-5xl 2xl:mx-auto w-full">
        <div className="bg-black p-8 lg:max-w-[580px]  w-full flex flex-wrap gap-4">
          <AboutCard
            icon={<IoDiamondOutline size={32} />}
            title="Core Values"
            description="Demonstrating client-focused trustworthiness, and excellence"
          />
          <AboutCard
            icon={<TbTargetArrow size={32} />}
            title="Mission"
            description="Be the premier provider of superior financial solutions"
          />
          <AboutCard
            icon={<IoEyeOutline size={32} />}
            title="Vision"
            description="To be the most preferred Financial Service Brand"
          />
        </div>
        <div className=" flex flex-col flex-1 px-10 py-16 lg:py-6 gap-4 max-md:gap-8">
          <h1 className="text-black lg:text-4xl text-2xl 2xl:text-2xl font-bold">
            Brescia Grameen, financial aid for migration
          </h1>
          <p className="text-light-gray">
            We're here to help people solve their biggest problem of migrating
            to another country for work, studies, or even to get settled.
          </p>
          <p className="text-light-gray">
            With a rich history spanning 16 years, Brescia Grameen has been a
            beacon of financial stability and reliability in Negombo. Our team
            of seasoned professionals is dedicated to assisting individuals in
            achieving their international aspirations through tailored financial
            solutions.
          </p>
          <div className="flex items-center text-center">
            <Link to="/contact" className="w-full">
              <button className="w-full gap-2 bg-primary-orange text-xl font-semibold hover:bg-opacity-90 text-white py-1.5 px-2">
                Get Started
              </button>
            </Link>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="font-bold text-lg text-black">
              <span className="text-green-600">5000+</span> trusted customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
