import React from "react";
import { Link } from "react-router-dom";

import AboutCard from "./aboutCard";
import customers from "../assets/mains/customers.png";

import { IoDiamondOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";

const About = () => {
  return (
    <section className="bg-white max-md:p-5 lg:px-16 lg:py-14 max-md:h-auto lg:max-w-7xl">
      <div className="flex items-start max-md:flex-col max-md:gap-6">
        <div className="bg-black p-8 max-w-[580px] flex flex-wrap gap-4">
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
          <div className="bg-primary-orange w-[240px] hidden lg:flex"></div>
        </div>
        <div className="flex flex-col flex-1 px-10 py-16 lg:py-0 max-md:px-0 lg:px-12 gap-4 max-md:gap-8 lg:gap-6">
          <h1 className="text-black text-4xl max-md:text-2xl font-bold">
            Brescia Grameen, financial aid for migration
          </h1>
          <p className="text-light-gray a lg:text-[20px]">
            We're here to help people solve their biggest problem of migrating
            to another country for work, studies, or even to get settled.
          </p>
          <p className="text-light-gray font-medium">
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
          <div className="flex flex-col gap-4 mt-4 lg:mt-0">
            <img
              src={customers}
              width={142}
              height={40}
              alt="customers group"
            />
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
