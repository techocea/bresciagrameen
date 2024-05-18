import React from "react";
import building from "../assets/building.png";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <section className="flex flex-1 max-md:flex-col w-full ">
        <div className="w-[605px] max-md:w-screen">
          <img src={building} alt="building" width={605} height={655} />
        </div>
        <div className="bg-gray w-[calc(100vw-605px)] max-md:w-full p-6 lg:pl-20 flex flex-col items-left justify-center gap-y-6 max-md:gap-y-8 max-md:py-16">
          <div>
            <h4 className="font-bold text-xl text-white uppercase">What is</h4>
            <span className="font-bold text-5xl text-yellow">
              Brescia Grameen
            </span>
          </div>
          <p className="md:text-lg max-sm:text-[16px] text-white w-3/4 max-md:w-full">
            With a rich history spanning 16 years, Brescia Grameen has been a
            beacon of financial stability and reliability in Negombo. Our team
            of seasoned professionals is dedicated to assisting individuals in
            achieving their international aspirations through tailored financial
            solutions.
          </p>
          <div className="w-full">
            <Button variant="outline" className="max-md:w-full">
              <Link to="about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
