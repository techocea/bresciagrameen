import FlagSlider from "../components/flagSlider";
import studyAbroad from "../assets/services/study-abroad.png";

import { TiTick } from "react-icons/ti";

import CTA from "../components/cta";

import { studyAbroadBenefits } from "../utils";

const StudyAbroad = () => {
  return (
    <>
      <section>
        <div clasName="relative">
          <img
            src={studyAbroad}
            alt="studyAbroad"
            className="absolute top-0 z-[-20] max-md:h-screen object-cover"
          />
          <div className="h-[500px] flex items-center justify-center text-center">
            <h1 className="uppercase text-4xl lg:text-5xl text-white font-semibold px-2 lg:px-24">
              Pave the gateway for your higher studies with us
            </h1>
          </div>
        </div>
        <div className="bg-dark-gray h-auto lg:pt-24 lg:px-16 pt-16 px-4">
          <h1 className="lg:text-5xl text-3xl font-bold text-white text-center">
            Managing Study Abroad Programs
          </h1>
          <div>
            <FlagSlider />
          </div>
        </div>
        <div className="bg-dark-gray h-auto py-0 lg:px-16 px-4">
          <div className="flex flex-col py-16 text-white">
            <h1 className="capitalize w-fit lg:text-3xl text-2xl font-semibold pb-2 border-b-2 border-primary-orange">
              Discover the Benefits of Studying Abroad with Brescia
            </h1>
            <div className="pt-[24px] flex flex-col gap-y-[24px] max-w-5xl">
              {studyAbroadBenefits[0].benefits.map((benefit, idx) => (
                <ul key={idx}>
                  <li className="font-regular flex gap-x-3 items-start text-white lg:text-[20px]">
                    <span className="text-green-400">
                      <TiTick />
                    </span>
                    {benefit}
                  </li>
                </ul>
              ))}
            </div>
            <h1 className="lowercase text-center lg:py-48 py-24 lg:text-8xl text-4xl lg:leading-[116px] font-bold bg-clip-text text-transparent bg-text-gradient">
              “50% Financial Support for Studies, If you do not have sufficient
              funds for your education, we offer financial support covering up
              to 50% of your study expenses. ”
            </h1>
            <div className="flex items-center justify-center gap-20">
              <div className="pt-0">
                <h2 className="text-2xl font-bold w-fit pb-2 border-b-2 border-primary-orange">
                  How to apply for a loan
                </h2>
                <div className="flex flex-col gap-4 md:max-w-4xl pt-8 lg:text-[20px]">
                  {studyAbroadBenefits[1].howToApply.map((point, index) => (
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
        </div>
      </section>
    </>
  );
};

export default StudyAbroad;
