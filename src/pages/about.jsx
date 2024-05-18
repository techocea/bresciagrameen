import React from "react";
import grp from "../assets/grp.png";
import overview from "../assets/overview.png";

const About = () => {
  return (
    <>
      <section className="pb-16 flex flex-col gap-7 bg-gray">
        <div className="px-20 max-md:px-4">
          <div>
            <h1 className="title text-4xl text-yellow-600 lg:text-5xl font-bold text-center pb-6 border-b border-main ">
              Brescia – The success of Kattuwa and Beyond…
            </h1>

            <p className="text-[#e7e4e1] text-center md:text-lg max-sm:text-[16px] leading-relaxed pt-6">
              With a rich history spanning 16 years, Brescia Grameen has been a
              beacon of financial stability and reliability in Negombo. Our team
              of seasoned professionals is dedicated to assisting individuals in
              achieving their international aspirations through tailored
              financial solutions.
              <br />
              <br />
              Brescia Grameen (Pvt.) Ltd is well known in the field of finance a
              few decades ago, Completion of solid 35 years built on trust and
              social integration in the local community has laid the foundation
              for several decades to come. In considering the prevailing
              economic conditions, we understood the dire need for organic
              growth and diversification of business risk. Thus, by 2014 Brescia
              Grameen was transformed in to a Group of Companies investing in
              diverse industries. This resulted in diversifying the business
              risk, as is deemed necessary to reduce the overall risk to
              business success.
            </p>
          </div>
          <div className="flex max-md:flex-col-reverse items-center justify-center gap-10 lg:py-10 max-md:py-16">
            <div>
              <img src={grp} alt="group" width={500} height={650} />
            </div>
            <div>
              <h1 className="text-7xl text-center lg:text-5xl max-md:text-4xl font-bold w-[400px] max-md:w-[310px] lg:w-[600px] leading-[100px] lg:leading-[120px]">
                <span className="text-yellow">Brescia</span>&nbsp;Group of
                Companies
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-8 ">
            <div>
              <p className="text-[#e7e4e1] text-left md:text-lg max-sm:text-[16px] leading-relaxed">
                Brescia Grameen serves our valued customers like a bank.
                <strong>
                  We take only half the processing time as compared to banks if
                  all supporting documents are intact as they observe the
                  requirements based on priority.
                </strong>
                Reinvesting profits, high return on investments, maximum
                utilization of resources and treating customers with respect are
                strengths of Brescia Grameen.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-yellow">
                Overview of the Company
              </h1>
              <img
                src={overview}
                alt="overview"
                width={700}
                height={650}
                className="lg:w-[800px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-md:py-10 pb-24 max-md:h-[1100px] md:items-center ">
          <h1 className="md:text-lg max-sm:text-[16px] pb-4 font-bold max-md:text-center">
            Milestone
          </h1>
          <div className="max-md:px-8 max-md:items-start justify-center max-md:justify-start">
            <div className="w-[24px] h-[24px] bg-black rounded-full hidden" />
            <div className="w-[5px] h-[75px] bg-black  " />
            <div className="flex relative gap-2">
              <div className="bg-yellow h-[55px] max-md:h-auto w-[500px] lg:w-[600px] max-md:w-[310px] absolute left-[3rem] max-md:left-0 top-[-1rem] p-2 text-white md:text-lg max-sm:text-[16px] font-bold">
                1982&nbsp; Started with a small service
              </div>
              <p className="absolute left-[3rem]  max-md:left-0 md:text-lg max-sm:text-[16px] top-10 w-[500px] lg:w-[600px] max-md:w-[310px] pl-2 text-[#e7e4e1]">
                First Step in a long journey
              </p>
            </div>
            <div className="w-[5px] h-[150px] bg-black  " />
            <div className="flex relative gap-2">
              <div className="bg-yellow h-[55px] max-md:h-auto w-[500px] lg:w-[600px] max-md:w-[310px] absolute right-[3rem] max-md:left-0 top-[-1rem] p-2 text-white md:text-lg max-sm:text-[16px] font-bold">
                1990&nbsp; First Employees
              </div>
              <p className="absolute right-[3rem] max-md:left-0  max-md:pb-10 md:text-lg max-sm:text-[16px] top-10 w-[500px] lg:w-[600px] max-md:w-[310px] pl-2 text-[#e7e4e1]">
                The entity was growing steadily, and its growth was certain. New
                office premises was a clear sign of growth.
              </p>
            </div>
            <div className="w-[5px] h-[150px] max-md:h-[250px] bg-black  " />
            <div className="flex relative gap-2">
              <div className="bg-yellow h-[55px] max-md:h-auto w-[500px] lg:w-[600px] max-md:w-[310px] absolute left-[3rem] max-md:left-0 top-[-1rem] p-2 text-white md:text-lg max-sm:text-[16px] font-bold">
                2001&nbsp; First Recognition
              </div>
              <p className="absolute left-[3rem] max-md:left-0 md:text-lg max-sm:text-[16px] top-10 w-[500px] lg:w-[600px] max-md:w-[310px] pl-2 text-[#e7e4e1]">
                Success at its peak. After being in the industry, the company
                was a household name in the local community.
              </p>
            </div>
            <div className="w-[5px] h-[150px] max-md:h-[250px] bg-black  " />
            <div className="flex relative gap-2">
              <div className="bg-yellow h-[55px] max-md:h-auto w-[500px] lg:w-[600px] max-md:w-[310px] absolute right-[3rem] max-md:left-0 top-[-1rem] p-2 text-white md:text-lg max-sm:text-[16px] font-bold">
                2014&nbsp; Brescia Grameen Family
              </div>
              <p className="absolute right-[3rem] max-md:left-0 md:text-lg max-sm:text-[16px] top-10 w-[500px] lg:w-[600px] max-md:w-[310px] pl-2 text-[#e7e4e1]">
                Able to provide clients cutting edge service with the aid of
                information technology. A small step in a giant stride to expand
                the customer base and serve better.
              </p>
            </div>
            <div className="w-[5px] h-[150px] max-md:h-[250px] lg:h-[180px] bg-black " />
            <div className="w-[24px] h-[24px] bg-black rounded-full hidden" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
