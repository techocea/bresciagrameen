import { Link } from "react-router-dom";

import CTA from "../components/cta";
import ScrollToTop from "../components/scrollToTop";

import workVisaImage from "../assets/mains/migration-image.png";
import workEligibility from "../assets/services/work-eligibility.png";
import workIcon from "../assets/icons/work-icon.svg";

import { TiTick } from "react-icons/ti";

import { workVisa } from "../utils";

const WorkVisa = () => {
  return (
    <>
      <ScrollToTop>
        <section>
          <div clasName="relative">
            <img
              src={workVisaImage}
              alt="workVisaImage"
              className="absolute top-0 z-[-20] max-md:h-screen object-cover"
            />
            <div className="h-[500px] flex items-center justify-center text-center">
              <h1 className="uppercase text-5xl text-white font-semibold">
                Employment visa loans
              </h1>
            </div>
          </div>
          <div className="bg-dark-gray h-auto lg:py-24 py-16 lg:px-16 px-4">
            <div className="flex max-md:flex max-md:flex-col gap-4  pb-16">
              <div className="flex flex-1 items-center justify-center">
                <img src={workIcon} alt="workIcon" />
              </div>
              <div className="flex flex-col gap-4 flex-[2] text-white">
                <h1 className="text-3xl font-semibold w-fit pb-2 border-b-2 border-primary-orange text-center lg:text-left pt-6 lg:pt-0">
                  About Work Visa financial support
                </h1>
                <p className="font-regular lg:text-[20px] max-md:text-center">
                  At Brescia Grameen, we understand that securing a work visa
                  can be a significant financial burden. Our dedicated financial
                  support services are designed to help you cover the costs
                  associated with obtaining and maintaining a work visa,
                  allowing you to focus on your career aspirations.
                </p>
              </div>
            </div>
            <div className="flex flex-col py-16 text-white">
              <h1 className="capitalize w-fit lg:text-3xl text-2xl font-semibold pb-2 border-b-2 border-primary-orange">
                Benefits of brescia grameen migration loans
              </h1>
              <div className="pt-[24px] flex flex-col gap-y-[24px] max-w-3xl">
                {workVisa[0].benefits.map((benefit, idx) => (
                  <ul key={idx}>
                    <li className="font-regular flex gap-x-3 items-center text-white lg:text-[20px]">
                      <span className="text-green-400">
                        <TiTick />
                      </span>
                      {benefit}
                    </li>
                  </ul>
                ))}
              </div>
              <h1 className="lowercase text-center lg:py-48 py-24 lg:text-8xl text-4xl lg:leading-[96px] font-bold bg-clip-text text-transparent bg-text-gradient">
                “We also provide Show Money”
              </h1>
              <div className="flex max-md:flex-col items-center justify-center gap-20">
                <img
                  src={workEligibility}
                  className="w-1/4"
                  alt="workEligibility"
                />
                <div className="pb-16">
                  <h2 className="text-2xl font-bold w-fit bg-primary-orange p-1.5">
                    Eligibility to apply for a loan
                  </h2>
                  <div className="flex flex-col gap-4 md:max-w-lg pt-8 lg:text-[20px]">
                    {workVisa[1].eligibilityPoints.map((point, index) => (
                      <ul key={index}>
                        <li className="font-regular flex gap-x-3 items-center lg:text-[20px]">
                          <span className="text-green-400">
                            <TiTick />
                          </span>
                          {point}
                        </li>
                      </ul>
                    ))}
                    <div className="mt-8 text-primary-orange hover:border-b hover:border-b-primary-orange w-fit ">
                      <Link to="/contact">Apply Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pt-48 pt-24">
                <h2 className="text-2xl font-bold w-fit pb-2 border-b-2 border-primary-orange">
                  How to apply for a loan
                </h2>
                <div className="flex flex-col gap-4 md:max-w-4xl pt-8 lg:text-[20px]">
                  {workVisa[2].howToApply.map((point, index) => (
                    <ul key={index}>
                      <li className="font-regular flex gap-x-3 items-center text-white">
                        <span className="text-green-400">
                          <TiTick />
                        </span>
                        {point}
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="mt-24 flex items-center justify-center pt-16">
                  <CTA />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollToTop>
    </>
  );
};

export default WorkVisa;
