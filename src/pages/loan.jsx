import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { ValidationError, useForm } from "@formspree/react";

import logo from "../assets/logo.png";
import office from "../assets/office.jpg";

import { BiBuildingHouse, BiMoney, BiUser } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

import ThankYou from "../utils/ThankYou";

const Loan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state, handleSubmit] = useForm("xdoqygbz");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    city: "",
    amount: "",
    purpose: "",
    property: "",
  });
  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center m-16 h-full">
        <ThankYou />
      </div>
    );
  }
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePropertyChange = async (e) => {
    e.preventDefault();
    const { value } = e.target;

    // if (value === "Yes") {
    //   console.log({ property: "yes" });
    // } else if (value === "No") {
    //   console.log({ property: "no" });
    // }
    setFormData({ ...formData, property: value });
    if (value === "Yes" || value === "No") {
      try {
        const response = await handleSubmit(e);
        if (response.success) {
          console.log("Form submitted successfully");
        } else {
          console.error("Form submission failed:", response);
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
  };

  return (
    <>
      <div className="my-16 h-full flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="border border-yellow rounded-lg max-md:border-0 p-4 flex flex-col gap-y-4 items-center justify-center">
            <div className="rounded-full">
              <img src={logo} alt="logo" width={50} height={50} />
            </div>
            <h1 className="font-bold text-3xl max-md:text-xl text-center w-[520px] max-md:w-full">
              Welcome to Brescia Grameen, Digital Onboarding platform
            </h1>
            <div>
              <img src={office} alt="office" width={350} height={280} />
            </div>
            <h2 className="font-bold max-md:text-center max-md:font-semibold">
              Hi! we would like to get to know you
            </h2>
            <Form
              action="https://formspree.io/f/xdoqygbz"
              method="POST"
              onSubmit={handleSubmit}
              // onSubmit={(e) =>
              //   handleSubmit(e).then(() => {
              //     console.log(formData);
              //   })
              // }
            >
              <div className=" grid grid-cols-2 gap-3 max-md:grid-cols-1 relative">
                <div className="w-[260px] max-md:w-full relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-full border outline-0 p-2 "
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <BiUser
                    size={28}
                    className="text-yellow absolute right-6 top-3 bottom-4"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="w-[260px] max-md:w-full relative">
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Contact Number"
                    className="w-full rounded-full border outline-0 p-2 "
                    required
                    value={formData.contact}
                    onChange={handleInputChange}
                  />
                  <BsFillTelephoneFill
                    size={28}
                    className="text-yellow absolute right-6 top-3 bottom-4"
                  />
                  <ValidationError
                    prefix="Contact"
                    field="contact"
                    errors={state.errors}
                  />
                </div>
                <div className="w-[260px] max-md:w-full relative">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    className="w-full rounded-full border outline-0 p-2 "
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <BiBuildingHouse
                    size={28}
                    className="text-yellow absolute right-6 top-3 bottom-4"
                  />
                  <ValidationError
                    prefix="City"
                    field="city"
                    errors={state.errors}
                  />
                </div>
                <div className="w-[260px] max-md:w-full relative">
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    placeholder="Loan Amount"
                    className="w-full rounded-full border outline-0 p-2 "
                    required
                    value={formData.amount}
                    onChange={handleInputChange}
                  />
                  <BiMoney
                    size={28}
                    className="text-yellow absolute right-6 top-3 bottom-4"
                  />
                  <ValidationError
                    prefix="Amount"
                    field="amount"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="lg:w-[520px] relative mt-4 ">
                <select
                  name="purpose"
                  id="purpose"
                  className="w-full rounded-full border outline-0 p-2"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                >
                  <option
                    value=""
                    disabled
                    className="text-gray-500 cursor-not-allowed"
                  >
                    Loan Purpose
                  </option>
                  <option value="Work">Work </option>
                  <option value="Study">Study </option>
                  <option value="Migration">Migration</option>
                  <option value="Other">Other</option>
                </select>
                <FaHandHoldingDollar
                  size={28}
                  className="text-yellow absolute right-6 top-3 bottom-4"
                />
                <div className="lg:w-[520px] relative mt-4 px-2 flex max-md:flex-col justify-between">
                  <label className="">Do you have a land to mortgage?</label>
                  <div className="flex gap-x-4">
                    <input
                      type="radio"
                      name="property"
                      value="Have property"
                      onChange={handlePropertyChange}
                    />
                    <label htmlFor="propertyYes">Yes</label>
                    <input
                      type="radio"
                      name="property"
                      value="No property"
                      onChange={handlePropertyChange}
                    />
                    <label htmlFor="propertyNo">No</label>
                  </div>
                </div>
              </div>
              <div className="w-full mt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  aria-disabled="true"
                  className="bg-yellow max-md:w-full hover:opacity-75 p-2 w-full text-white font-bold rounded-full"
                >
                  Proceed
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan;
