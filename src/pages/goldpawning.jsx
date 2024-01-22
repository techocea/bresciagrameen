import React, { useEffect } from "react";
import CTA from "../components/CTA";
import { HiCheck } from "react-icons/hi";
import gold from "../assets/gold.jpg";
import lady from "../assets/lady.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const GoldPawning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section className="p-16 max-md:p-8">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="font-medium text-4xl pb-16">Gold Pawning</h1>
          <div className="flex max-md:flex-col items-start justify-center gap-16">
            <img
              src={gold}
              alt="gold"
              width={500}
              height={500}
              className="border-none rounded-2xl shadow-2xl"
            />
            <p className="w-[500px] max-md:w-[300px] lg:w-[600px] text-xl max-md:text-smx lg:text-[24px] leading-relaxed text-slate-600">
              <span className="text-4xl font-semibold capitalize">B</span>rescia
              Grameen`s Gold Loans are an ideal short term loan solution to meet
              your urgent cash requirements. Just bring your gold jewellery to
              us and we will provide a cash advance on the spot in meeting your
              needs, no hassle and no waiting. Brescia Grameen provides a host
              of benefits that make Gold Loans the most attractive pawning
              service in the country.
              <br />
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-gray p-16 max-md:p-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex max-md:flex-col items-center gap-10 max-md:gap-5 justify-center max-md:items-start capitalize">
          <div
            className="h-[250px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-3xl font-semibold pb-3">The Benefits</h1>
            <ul className="flex flex-col gap-3 max-md:gap-5 text-[18px] lg:text-[24px] max-md:h-auto max-md:text-smx">
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;The highest cash advance amount in the market.
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Friendly & speedy service.
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Customers can redeem their jewellery at any given time.
              </li>
            </ul>
          </div>
          <div
            className="h-[250px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src={lady}
              alt="lady"
              width={400}
              height={400}
              className="border-none rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-4 mt-10 p-16 max-md:p-8">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-main font-bold text-3xl">Interest Rates</h1>
          <p className="text-xl lg:text-[24px]">
            Please note that due to rapidly fluctuating Interest Rates in the
            market, the Interest Rates are subject to change without notice and
            may not be the same on the date of Renewal. Kindly contact us on
            Telephone No: 076 3 484 719 for current Interest Rates.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <CTA />
        </div>
      </section>
    </>
  );
};

export default GoldPawning;
