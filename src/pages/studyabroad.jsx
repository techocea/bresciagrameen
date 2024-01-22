import React, { useEffect } from "react";
import CTA from "../components/CTA";
import money from "../assets/money.webp";
import lady from "../assets/lady.jpg";
import { HiCheck } from "react-icons/hi";

const MoneyExchange = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="p-16 ">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="font-medium lg:w-[600px] text-xl lg:text-[24px] pb-16">
            Money Exchange
          </h1>
          <div className="flex items-start justify-center gap-16">
            <img
              src={money}
              alt="money"
              width={500}
              height={500}
              className="border-none rounded-2xl shadow-2xl"
            />
            <p className="w-[500px] lg:w-[600px] text-xl lg:text-[24px] leading-relaxed text-slate-600">
              <span className="text-4xl font-semibold capitalize">A</span>t
              Brescia Grameen Finance Company, we understand the importance of
              seamless and secure money exchange services. Whether you are a
              traveler, an expatriate, or a business owner, our dedicated team
              is here to cater to all your currency exchange needs with
              efficiency and reliability.
              <br />
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-gray p-16"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex items-center gap-10 justify-center  capitalize">
          <div
            className="h-[250px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-3xl font-semibold pb-3">The Benefits</h1>
            <ul className="grid grid-cols-2 gap-3 text-[18px] lg:text-[24px] ">
              <li className="flex gap-2 items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Competitive Rates
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Wide Range of Currencies
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Secure Transactions
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Swift Services
              </li>
              <li className="flex gap-2 items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Pre-Order Services
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
      <section className=" flex flex-col gap-4 mt-10 p-16">
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

export default MoneyExchange;
