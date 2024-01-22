import React from "react";

const About = () => {
  return (
    <section className="bg-white px-16 lg:px-24 max-md:px-0 pb-14 text-main">
      <div className="flex flex-col gap-8 text-center max-md:text-left items-center">
        <div
          className="flex items-center gap-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="capitalize text-4xl max-md:text-xl font-bold lg:text-6xl">
            About brescia grameen
          </h1>
          <span className="text-7xl">&#45;</span>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="pb-14">
          <p className="text-justify max-md:text-left max-md:px-4 w-[1100px] max-md:w-screen text-xl lg:text-[28px] lg:leading-normal">
            With a rich history spanning 16 years, Brescia Grameen has been a
            beacon of financial stability and reliability in Negombo. Our team
            of seasoned professionals is dedicated to assisting individuals in
            achieving their international aspirations through tailored financial
            solutions.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-white">
          <div
            className="bg-yellow py-10 opacity-90 p-4 w-screen  shadow-2xl text-center flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-4xl font-semibold ">Our Vision</h1>
            <p className="text-3xl normal-case pl-5">
              &quot;To be the most preferred Financial Service Brand&quot;
            </p>
            <h1 className="text-4xl font-semibold ">Our Mission</h1>
            <p className="text-3xl normal-case pl-5">
              &quot;Be the premier provider Of superior financial
              solutions&quot;
            </p>
          </div>
        </div>
      </div>
      <div
        className="pt-16 px-24 max-md:px-4"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex items-center gap-4 ">
          <h1 className=" max-md:text-left capitalize text-4xl max-md:text-2xl font-bold lg:text-5xl">
            our core values
          </h1>
        </div>
        <ul className="max-md:flex max-md:flex-col max-md:gap-3">
          <li
            className="text-[22px] lg:text-[26px] pb-2 max-md:pt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            &diams;&nbsp;Client focused trustworthiness, flexibility, integrity
            & Excellence
          </li>
          <li
            className="text-[22px] lg:text-[26px] pb-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            &diams;&nbsp;Respect for all communities.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
