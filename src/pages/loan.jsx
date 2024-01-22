import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";



const Loan = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  useEffect(() => {
    Aos.init();
  });

  const [selectedPurpose, setSelectedPurpose] = useState("Select option");
  const [countryField, setCountryField] = useState(false);
  const [travelField, setTravelField] = useState(false);
  const [agencyField, setAgencyField] = useState(false);
  const [relationField, setRelationField] = useState(false);
  const [supportField, setSupportField] = useState(false);
  const [yesCountryField, setYesCountryField] = useState(false);


  const [state, handleSubmit] = useForm("mrgnbyzn");

  const handlePurposeChange = (e) => {
    const selected = e.target.value;
    setSelectedPurpose(selected);

    setCountryField(selected === "study_abroad" || selected === "work_abroad");
    setTravelField(selected === "Yes");
    setAgencyField(selected === "study_abroad" || selected === "work_abroad");
    setRelationField(false);
    setSupportField(false);
    setYesCountryField(false);


    if (selected === "personal_loan") {
      setSupportField(true);
      if (
        e.target.name = "(personal-loan)relative abroad" &&
        e.target.value === "Yes"
      ) {
        // setRelationField(true)
        setYesCountryField(true)
      }
    }
  };
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <section className="pt-[150px] max-md:pt-[100px] bg-slate-200 p-16 max-md:p-0 max-md:w-screen flex items-center justify-center max-md:flex-col">
        <form
          action="https://formspree.io/f/mrgnbyzn"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-center max-md:text-[26px] py-6 uppercase">
            Register for a loan&#x21;
          </h1>
          <div className="w-[1000px] max-md:w-screen max-md:px-5 flex flex-col gap-7 lg:gap-10">
            <div className="max-md:flex max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center ">
              <h1 className="form font-bold text-yellow text-xl pb-2 max-md:text-[22px]">Personal Information</h1>
              <hr className="w-full max-md:w-screen" />
              <div className="flex max-md:flex-col max-md:items-start py-6 lg:py-12 justify-between max-md:w-full">
                <div className="flex flex-col gap-4 max-md:w-full">
                  <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
                    <label>1.&nbsp;Name</label>
                    <input id="name" name="name" type="text" required></input>
                  </div>
                  <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
                    <label>2.&nbsp;Mobile</label>
                    <input id="mobile" name="mobile" type="text" required></input>
                  </div>
                  <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
                    <label>3.&nbsp;NIC No</label>
                    <input id="nic" name="nic" type="text" required></input>
                  </div>
                </div>
                <div className="flex flex-col gap-4 max-md:w-full max-md:mt-4">
                  <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
                    <label>4.&nbsp;District</label>
                    <input id="district" name="district" type="text" required></input>
                  </div>
                  <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
                    <label>5.&nbsp;City</label>
                    <input id="city" name="city" type="text" required></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:px-6">
              <h1 className="form font-bold text-yellow text-xl pb-2 max-md:text-[22px]">Loan Information</h1>
              <hr className="w-full max-md:w-screen" />
              <div className="flex flex-col gap-6 lg:gap-6 py-4 lg:py-12 max-md:w-screen max-md:px-6">
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label>1.&nbsp;Loan Amount in LKR</label>
                  <input id="amount" name="amount" type="text" required></input>
                </div>
                <div className="flex max-md:flex-col gap-6 items-center max-md:items-start">
                  <label>2.&nbsp;Purpose of taking the loan</label>
                  <select
                    onChange={handlePurposeChange}
                    value={selectedPurpose}
                  >
                    <option value="">Select option</option>
                    <option value="work_abroad">Work Abroad</option>
                    <option value="study_abroad">Study Abroad</option>
                    <option value="personal_loan">Personal Loan</option>
                  </select>
                </div>
                {countryField && (
                  <div className="flex gap-6 max-md:flex-col max-md:items-start items-center">
                    <label>3.&nbsp;Traveling country?</label>
                    <input type="text" name="country" id="country" />
                  </div>
                )}
                {supportField && (
                  <div className="flex max-md:flex-col gap-6 items-center">
                    <div className="flex max-md:flex-col items-center gap-2">
                      <p>3.&nbsp;<strong>Do you have a relation in abroad?</strong> If<strong>&nbsp;YES,</strong> where ?</p>
                      <input type="text" name="traveled before" id="traveled before" />
                    </div>
                  </div>)}
                {agencyField && (
                  <div className="flex gap-6 max-md:flex-col max-md:items-start items-center">
                    <p>4.&nbsp;Are you traveling through an agency or by sponsorship?</p>
                    <input type="text" name="agency/sponsorship" id="agency/sponsorship" />
                  </div>
                )}
              </div>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:px-6" >
              <h1 className="form font-bold text-yellow text-xl pb-2 max-md:text-[22px]">Migration History</h1>
              <hr className="w-full max-md:w-screen" />
              <div className="flex flex-col gap-6 lg:gap-6 py-4 lg:py-12 max-md:w-screen max-md:px-6">
                <div className="flex max-md:flex-col items-center gap-2 lg:gap-0 lg:justify-between">
                  <p>1.&nbsp;<strong>Have you traveled before?</strong> If<strong>&nbsp;YES,</strong> where have you been to?</p>
                  <input type="text" name="traveled before" id="traveled before" />
                </div>
                <div className="flex max-md:flex-col items-center gap-2">
                  <p>2.&nbsp;<strong>Do you have any relatives </strong>in the country you wish to migrate?</p>
                  <input type="text" name="relatives live in" id="relatives live in" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:px-6" >
            <h1 className="form font-bold text-yellow text-xl pb-2 max-md:text-[22px]">Mortgage Property Details </h1>
            <hr className="w-full max-md:w-screen" />
            <div className="flex flex-col gap-6 lg:gap-6 py-4 lg:py-12 max-md:w-screen max-md:px-6">
              <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                <p>1.&nbsp;Do you have a property to mortage with us?</p>
                <input type="text" name="mortgage property" id="mortgage property" required />
              </div>
              <div className="flex max-md:flex-col  items-center max-md:items-start gap-2">
                <p>2.&nbsp;Where is it located?</p>
                <input type="text" name="property location" id="property location" required />
              </div>
              <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                <p>3.&nbsp;What is the estimated value of the property?</p>
                <input type="text" name="property valuation" id="property valuation" required />
              </div>
            </div>
            <div className="max-md:w-full mt-6">
              <button
                type="submit"
                className="bg-yellow p-3 w-[170px] max-md:text-xl max-md:w-full rounded-full text-white font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Loan;
