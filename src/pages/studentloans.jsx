import React, { useEffect } from "react";
import CTA from "../components/CTA";
import grad from "../assets/grad.jpg";
import { HiCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const StudentLoans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <section className="p-16 ">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="font-medium text-4xl pb-16">Student Loans</h1>
          <div className="flex items-start justify-center gap-16">
            <img
              src={grad}
              alt="grad"
              width={500}
              height={500}
              className="border-none rounded-2xl shadow-2xl"
            />
            <p className="w-[500px] lg:w-[600px] text-xl lg:text-[24px] leading-relaxed text-slate-600">
              <span className="text-4xl font-semibold capitalize">E</span>
              mbarking on a journey to study abroad is an exciting endeavor, and
              we understand the financial challenges that may arise. Here, we
              specialize in providing financial support for your educational
              pursuits.Create a realistic budget that includes tuition, books,
              and living expenses. Stick to it to avoid unnecessary debt.It's
              tempting to take the maximum offered, but borrow only what's
              essential to minimize repayment stress after graduation.
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-gray p-16"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex items-center gap-10 justify-center capitalize">
          <div
            className="h-[250px] border-r pr-10 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-3xl font-semibold pb-3">The Benefits</h1>
            <ul className="flex flex-col gap-3 text-[18px] lg:text-[24px]">
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;your dream to study abroad
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;minimum documents
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;10-14 days of working process
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;flexible payment methods
              </li>
            </ul>
          </div>
          <div
            className="h-[250px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-3xl font-semibold pb-3">
              Eligibility & Other Info
            </h1>
            <ul className="flex flex-col gap-3 text-[18px] lg:text-[24px]">
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;age above 18 years
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;permanent residence
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Should have a passport
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;A Security document
              </li>
            </ul>
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

export default StudentLoans;
