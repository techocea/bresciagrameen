import { useState } from "react";
import { Form } from "react-router-dom";
import { ValidationError, useForm } from "@formspree/react";

import logo from "../assets/logo.png";
import office from "../assets/office.jpg";

import { BiBuildingHouse, BiMoney, BiUser } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

import ThankYou from "../components/ThankYou";

const Loan = () => {
  const [state, handleSubmit] = useForm("myyrlylq");
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    city: "",
    amount: "",
    purpose: "",
  });
  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center m-16 h-full">
        <ThankYou />
      </div>
    );
  }
  const handlePurposeChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
              action="https://formspree.io/f/myyrlylq"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className=" grid grid-cols-2 gap-3 max-md:grid-cols-1 relative">
                <div className="w-[260px] relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-full border outline-0 p-2 "
                    required
                    value={formData.name}
                    onChange={handlePurposeChange}
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
                <div className="w-[260px] relative">
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Contact Number"
                    className="w-full rounded-full border outline-0 p-2 "
                    required
                    value={formData.contact}
                    onChange={handlePurposeChange}
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
                <div className="w-[260px] relative">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    className="w-full rounded-full border outline-0 p-2 "
                    required
                    value={formData.city}
                    onChange={handlePurposeChange}
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
                <div className="w-[260px] relative">
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    placeholder="Loan Amount"
                    className="w-full rounded-full border outline-0 p-2 "
                    required
                    value={formData.amount}
                    onChange={handlePurposeChange}
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
                  onChange={handlePurposeChange}
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
              </div>
              <div className="w-full mt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
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
