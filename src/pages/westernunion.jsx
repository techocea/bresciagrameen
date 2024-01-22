import React, { useEffect } from "react";
import CTA from "../components/CTA";
import { HiCheck } from "react-icons/hi";
import western from "../assets/western.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const WesternUnion = () => {
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
          <h1 className="font-medium text-4xl pb-16">Western Union</h1>
          <div className="flex max-md:flex-col items-start justify-center gap-16">
            <img
              src={western}
              alt="western"
              width={500}
              height={500}
              className="border-none rounded-2xl shadow-2xl"
            />
            <p className="w-[500px] max-md:w-[300px] lg:w-[600px] text-xl max-md:text-smx lg:text-[24px] leading-relaxed text-slate-600">
              <span className="text-4xl font-semibold capitalize">W</span>e
              understand the importance of staying connected with your loved
              ones and ensuring the seamless transfer of funds, no matter where
              they are in the world. As a global leader in money transfer
              services, we pride ourselves on providing secure, reliable, and
              convenient solutions for your financial needs.Whether you're
              supporting family members, assisting friends, or conducting
              business internationally, Western Union is your trusted partner
              for reliable and accessible money transfer services.
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
            className="h-[250px] border-r max-md:border-r-0  pr-10 max-md:pr-0"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-3xl font-semibold pb-3">The Benefits</h1>
            <ul className="flex flex-col gap-3 text-[18px] lg:text-[24px]  max-md:text-smx">
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Global Reach
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Speedy Transactions
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Diverse Sending Options
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Reliable Security Measures
              </li>
            </ul>
          </div>
          <div
            className="h-[250px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-3xl font-semibold pb-3">
              How to Send Money with Western Union?
            </h1>
            <ul className="flex flex-col gap-3 text-[18px] lg:text-[24px]  max-md:text-smx">
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Visit an Agent Location
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;permanent residence
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Online and Mobile Services
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Track Your Transfer
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" flex flex-col gap-4 mt-10 max-md:mt-0 p-16 max-md:p-8">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-main font-bold text-3xl ">Interest Rates</h1>
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

export default WesternUnion;
