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
  const [relativeAbroad, setRelativeAbroad] = useState(false);

  const [state, handleSubmit] = useForm("mrgnbyzn");

  const handlePurposeChange = (e) => {
    const selected = e.target.value;
    setSelectedPurpose(selected);

    setCountryField(selected === "study_abroad" || selected === "work_abroad");
    setTravelField(selected === "Yes");
    setAgencyField(selected === "study_abroad" || selected === "work_abroad");
    setRelationField(false);
    setSupportField(selected === "personal_loan");
    setYesCountryField(false);
    setRelativeAbroad(false);

    if (selected === "personal_loan") {
      if (
        e.target.name === "(personal-loan)relative abroad" &&
        e.target.value === "Yes"
      ) {
        relationField(true);
      }
    }
    if (
      e.target.name === "(migrate history)relative abroad" &&
      e.target.value === "Yes"
    ) {
      setRelativeAbroad(true);
    }
    if (e.target.name === "relative abroad" && e.target.value === "Yes") {
      setRelativeAbroad(true);
    }
  };
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <section className="bg-slate-200 p-16 flex items-center justify-center">
        <form
          action="https://formspree.io/f/mrgnbyzn"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-center pb-6">
            Register for a loan&#x21;
          </h1>
          <div className="w-[1000px] flex flex-col gap-7">
            <div>
              <h1 className="font-bold text-xl">Personal Information</h1>
              <hr />
              <div className="form grid grid-cols-2 gap-4 max-md:grid-cols-1 lg:gap-6 py-4">
                <div>
                  <label>Name</label>
                  <input id="name" name="name" type="text"></input>
                </div>
                <div>
                  <label>Mobile</label>
                  <input id="mobile" name="mobile" type="text"></input>
                </div>
                <div>
                  <label>NIC No</label>
                  <input id="nic" name="nic" type="text"></input>
                </div>
                <div>
                  <label>District</label>
                  <input id="district" name="district" type="text"></input>
                </div>
                <div>
                  <label>City</label>
                  <input id="city" name="city" type="text"></input>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">Loan Information</h1>
              <hr />
              <div className="form grid grid-cols-2 gap-4 max-md:grid-cols-1 lg:gap-6 py-4">
                <div clas>
                  <label>Loan Amount in LKR</label>
                  <input id="amount" name="amount" type="text"></input>
                </div>
                <div>
                  <label>Purpose of taking the loan</label>
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
                  <div>
                    <label>Traveling country?</label>
                    <input type="text" name="country" id="country" />
                  </div>
                )}
                {supportField && (
                  <div>
                    <label>Do you have a relation in abroad?</label>
                    <input
                      type="radio"
                      name="(personal-loan)relative abroad"
                      id="yes"
                      value="Yes"
                      onChange={handlePurposeChange}
                    />
                    <label htmlFor="yes">Yes</label>
                    <input
                      type="radio"
                      name="(personal-loan)relative abroad"
                      id="no"
                      value="No"
                      onChange={handlePurposeChange}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                )}
                {relationField && (
                  <div>
                    <label>
                      <span className="text-red-600">*</span>In which country?
                    </label>
                    <input
                      id="relation-country"
                      name="relation-country"
                      type="text"
                    />
                  </div>
                )}

                {agencyField && (
                  <div className="flex gap-2">
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="agency/sponsorship"
                        id="agency"
                        value="Agency"
                      />
                      <label htmlFor="yes">Agency</label>
                      <input
                        type="radio"
                        name="agency/sponsorship"
                        id="sponsor"
                        value="Sponsor"
                      />
                      <label htmlFor="yes">Sponsor</label>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">Migration History</h1>
              <hr />
              <div className=" gap-4 max-md:grid-cols-1 lg:gap-6 py-4">
                <div className="flex items-center gap-2">
                  <label>Have you travelled before?</label>
                  <input
                    type="radio"
                    name="travelled before"
                    id="yes"
                    value="Yes"
                    onChange={handlePurposeChange}
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    name="travelled before"
                    id="no"
                    value="No"
                    onChange={handlePurposeChange}
                  />
                  <label htmlFor="no">No</label>
                </div>
                <div>
                  {travelField && (
                    <div className="flex flex-col gap-3 mt-3 w-3/4">
                      <label>
                        <span className="text-red-600">*</span>Where have you
                        been to?
                      </label>
                      <input id="migrated" name="migrated" type="text" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <label>Do you have any relatives abroad?</label>
                  <input
                    type="radio"
                    name="(migrate history)relative abroad"
                    id="yes"
                    value="Yes"
                    onChange={handlePurposeChange}
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    name="(migrate history)relative abroad"
                    id="no"
                    value="No"
                    onChange={handlePurposeChange}
                  />
                  <label htmlFor="no">No</label>
                </div>
                <div>
                  {relativeAbroad && (
                    <div className="flex flex-col gap-3 mt-3 w-3/4">
                      <label>
                        <span className="text-red-600">*</span>In which country?
                      </label>
                      <input
                        id="relative abroad"
                        name="relative abroad"
                        type="text"
                      />
                    </div>
                  )}
                </div>
                {/* <div>
                  <label>
                    <span className="text-red-600">*</span>If yes , where?
                  </label>
                  <input id="relatives" name="relatives" type="text" />
                </div> */}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-yellow p-3 w-[170px] rounded-full text-white font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Loan;
