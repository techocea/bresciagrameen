import React from "react";

const CTA = () => {
  return (
    <div className="flex max-md:flex-col items-center max-md:items-start max-md:gap-8 justify-around mt-8 rounded-2xl shadow-2xl py-10 px-8 bg-gray ">
      <div className="flex flex-col gap-2 max-md:gap-8 ">
        <h1 className="text-slate-800 text-3xl max-md:text-2xl font-semibold">
          At Brescia Grameen
          <br /> we are here to help you.
        </h1>
        <p className="text-slate-500 text-xl lg:text-[24px] pt-3 max-md:pt-0">
          Your questions and feedbacks are important to us.Just call or visit us
          <br />
          for all your inquiries
        </p>
      </div>
      <div className="max-md:w-[247px]">
        <button className="bg-yellow max-md:w-full hover:opacity-55 p-5 text-black font-bold rounded-full">
          <a href="tel:+94763484719"> Call Us Today</a>
        </button>
      </div>
    </div>
  );
};

export default CTA;
