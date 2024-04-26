import React, { useEffect } from "react";
import Button from "../components/Button";
import migrate from "../assets/migrate.jpg";
import { HiCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const MigrationLoans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <section className="p-16 max-md:p-8 ">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="font-medium text-4xl pb-16">Migration Loans</h1>
          <div className="flex max-md:flex-col items-start justify-center gap-16">
            <img
              src={migrate}
              alt="migrate"
              width={500}
              height={500}
              className="border-none rounded-2xl shadow-2xl"
            />
            <p className="w-[500px] max-md:w-[300px] lg:w-[600px] text-xl max-md:text-smx lg:text-[24px] leading-relaxed text-slate-600">
              <span className="text-4xl font-semibold capitalize">w</span>e
              understand that the journey of migration involves not just a
              change in location but a transformation in one's life. Our
              migration loans are tailored to make your move smooth,
              stress-free, and financially manageable. Whether you are
              relocating for employment, education, or personal reasons, we are
              here to support you every step of the way.
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
            className="h-[250px] border-r max-md:border-r-0 pr-10 max-md:pr-0"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <h1 className="text-3xl font-semibold pb-3 ">The Benefits</h1>
            <ul className="flex flex-col gap-3 max-md:gap-5 text-[18px] max-md:text-smx lg:text-[24px] ">
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;your dream to work abroad
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;minimum documents
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;10-14 days of working process
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
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
            <ul className="flex flex-col gap-3 max-md:gap-5 text-[18px] lg:text-[24px] ">
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;age above 18 years
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;permanent residence
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;Should have a passport
              </li>
              <li className="flex gap-2 items-center max-md:items-start">
                <HiCheck className="text-green-500" />
                &nbsp;A Security document
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
          <Button />
        </div>
      </section>
    </>
  );
};

export default MigrationLoans;
