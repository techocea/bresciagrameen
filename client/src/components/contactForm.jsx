import { useEffect } from "react";
// import logo from "../assets/logo.png";
// import office from "../assets/office.jpg";

import { BiBuildingHouse, BiMoney, BiUser } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

import ScrollToTop from "./scrollToTop";

const ContactForm = () => {
  return (
    <>
      <ScrollToTop>
        <div className="py-16 flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="p-4 flex flex-col gap-6 items-center justify-center">
              <h2 className="font-bold max-w-xl text-center max-md:font-semibold pb-4 text-2xl lg:text-3xl">
                Hi <span className="text-4xl"> &#128075;</span> Let us help you
                with the information you need.
              </h2>
              <form>
                <div className="grid grid-cols-1 gap-6 relative">
                  <div className="w-[540px] max-md:w-full relative">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full l border outline-0 p-2 "
                      required
                    />
                  </div>
                  <div className="w-[540px] max-md:w-full relative">
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="w-full l border outline-0 p-2 "
                      required
                    />
                  </div>
                  <div className="w-[540px] max-md:w-full relative">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full l border outline-0 p-2 "
                      required
                    />
                  </div>
                  <div className="w-[540px] max-md:w-full relative">
                    <input
                      type="text"
                      placeholder="Loan Amount"
                      className="w-full l border outline-0 p-2 "
                      required
                    />
                  </div>
                </div>
                <div className="lg:w-[540px] relative mt-4 ">
                  <select
                    name="purpose"
                    className="w-full l border outline-0 p-2"
                    required
                  >
                    <option
                      disabled
                      className="text-gray-500 cursor-not-allowed"
                    >
                      Service
                    </option>
                    <option value="Work">Work Visa Loan</option>
                    <option value="Study">Student Visa Loan</option>
                    <option value="Migration">Study Abroad</option>
                    <option value="Other">Show Money</option>
                  </select>

                  <div className="lg:w-[540px] relative mt-4 px-2 flex max-md:flex-col justify-between">
                    <label className="">Do you have a land to mortgage?</label>
                    <div className="flex gap-x-4">
                      <input type="radio" />
                      <label htmlFor="propertyYes">Yes</label>
                      <input type="radio" />
                      <label htmlFor="propertyNo">No</label>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <button
                    type="submit"
                    //   disabled={state.submitting}
                    //   aria-disabled="true"
                    className="bg-primary-orange max-md:w-full hover:opacity-75 p-2 w-full text-white font-bold l"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ScrollToTop>
    </>
  );
};

export default ContactForm;
