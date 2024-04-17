import { BiBuildingHouse, BiMoney, BiUser } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import logo from "../assets/logo.png";
import office from "../assets/office.jpg";
import { Form } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ValidationError, useForm } from "@formspree/react";
import ThankYou from "../components/ThankYou";
import { useState } from "react";
const Loan = () => {
  const [state, handleSubmit] = useForm("mrgnbyzn");
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="my-16 h-full flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="border border-yellow rounded-lg p-4 flex flex-col gap-y-4 items-center justify-center">
            <div className="rounded-full">
              <img src={logo} alt="logo" width={50} height={50} />
            </div>
            <h1 className="font-bold text-3xl max-md:text-xl text-center w-[520px] max-md:w-[350px]">
              Welcome to Brescia Grameen, Digital Onboarding platform
            </h1>
            <div>
              <img src={office} alt="office" width={350} height={280} />
            </div>
            <h2 className="font-bold max-md:text-center max-md:font-semibold">
              Hi! we would like to get to know you
            </h2>
            <Form
              action="https://formspree.io/f/mrgnbyzn"
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
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  placeholder="Loan Purpose"
                  className="w-full rounded-full border outline-0 p-2 "
                  required
                  value={formData.purpose}
                  onChange={handlePurposeChange}
                />
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

// import React, { useState } from "react";
// import { useForm } from "@formspree/react";

// const Loan = () => {
//   const [selectedPurpose, setSelectedPurpose] = useState("Select option");
//   const [liveAbroad, setLiveAbroad] = useState(false);
//   const [supportField, setSupportField] = useState(false);
//   const [agencyName, setAgencyName] = useState(false);
//   const [sponsoringMe, setSponsoringMe] = useState(false);
//   const [travelHistory, setTravelHistory] = useState(false);
//   const [showMigrationDetails, setShowMigrationDetails] = useState(false);

//   const [state, handleSubmit] = useForm("xayrngwe");

//   const handlePurposeChange = (e) => {
//     const selected = e.target.value;

//     setSelectedPurpose(selected);
//     setLiveAbroad(false);
//     setSupportField(false);
//     setAgencyName(false);
//     setSponsoringMe(false);
//     setTravelHistory(false);

//     if (selected === "personal_loan") {
//       setSupportField(true);
//       setShowMigrationDetails(false);
//     } else if (e.target.name === "relationStatus" && e.target.value === "relationStatusYes") {
//       setSupportField(true);
//       setLiveAbroad(true);
//     } else if (e.target.name === "relationStatus" && e.target.value === "relationStatusNo") {
//       setSupportField(true);
//       setLiveAbroad(false);
//     }

//     if (selected === "work_abroad" || selected === "study_abroad") {
//       setShowMigrationDetails(true);
//     }

//     if (e.target.name === "agency/sponsorship") {
//       if (e.target.value === "Agency") {
//         setAgencyName(true);
//         setSponsoringMe(false);
//       } else if (e.target.value === "Sponsorship") {
//         setSponsoringMe(true);
//         setAgencyName(false);
//       } else {
//         setAgencyName(false);
//         setSponsoringMe(false);
//       }
//     }

//     if (e.target.name === "traveledBefore" && e.target.value === "traveledBeforeYes") {
//       setTravelHistory(true);
//     }
//   };

//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }
//   return (
//     <>
//       <section className="pt-[150px] max-md:pt-[100px] bg-slate-200 p-16 max-md:p-0 max-md:w-screen flex items-center justify-center max-md:flex-col">
//         <form
//           action="https://formspree.io/f/xayrngwe"
//           method="POST"
//           onSubmit={handleSubmit}
//           className="w-screen flex flex-col items-center"
//         >
//           <h1 className="text-2xl lg:text-3xl font-bold text-center max-md:text-[26px] py-6 uppercase">
//             Register for a loan&#x21;
//           </h1>
//           <div className="w-[1000px]  max-md:w-screen max-md:p-5 flex flex-col gap-7 lg:gap-10">
//             <div className="max-md:flex max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center">
//               <h1 className="form font-bold text-yellow text-xl pb-2 max-md:text-[22px]">Personal Information</h1>
//               <hr className="w-full max-md:w-screen" />
//               <div className="flex max-md:flex-col max-md:items-start py-6 lg:py-12 justify-between max-md:w-full">
//                 <div className="flex flex-col gap-4 max-md:w-full">
//                   <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
//                     <label>1.&nbsp;Name</label>
//                     <input id="name" name="name" type="text" required></input>
//                   </div>
//                   <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
//                     <label>2.&nbsp;Mobile</label>
//                     <input id="mobile" name="mobile" type="text" required></input>
//                   </div>
//                   <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
//                     <label>3.&nbsp;NIC No</label>
//                     <input id="nic" name="nic" type="text" required></input>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-4 max-md:w-full max-md:mt-4">
//                   <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
//                     <label>4.&nbsp;District</label>
//                     <input id="district" name="district" type="text" required></input>
//                   </div>
//                   <div className="flex max-md:flex-col  items-center max-md:items-start gap-4 w-[400px] max-md:w-full justify-between">
//                     <label>5.&nbsp;City</label>
//                     <input id="city" name="city" type="text" required></input>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:px-6">
//               <h1 className="form font-bold text-yellow text-xl pb-2 max-md:text-[22px]">Loan Information</h1>
//               <hr className="w-full max-md:w-screen" />
//               <div className="flex flex-col gap-6 lg:gap-10 py-4 lg:py-12 max-md:w-screen max-md:px-6">
//                 <div className="flex max-md:flex-col items-center gap-2  max-md:items-start lg:gap-0 lg:justify-between">
//                   <label>1.&nbsp;Loan Amount in LKR</label>
//                   <input id="amount" name="amount" type="text" required></input>
//                 </div>
//                 <div className="flex max-md:flex-col items-center max-md:items-start gap-2 lg:gap-0 lg:justify-between">
//                   <label>2.&nbsp;Purpose of taking the loan</label>
//                   <select
//                     onChange={handlePurposeChange}
//                     value={selectedPurpose}
//                   >
//                     <option value="Select option" disabled>Select option</option>
//                     <option value="personal_loan">Personal Loan</option>
//                     <option value="work_abroad">Work Abroad</option>
//                     <option value="study_abroad">Study Abroad</option>
//                   </select>
//                 </div>
//                 {supportField && (
//                   <div className="flex max-md:flex-col gap-6 items-center">
//                     <div className="flex max-md:flex-col items-center gap-2">
//                       <label>3.&nbsp;Do you have a relation in abroad who is capabale of doing the payments?</label>
//                       <input type="radio" name="relationStatus" id="relationStatusyes" value="relationStatusYes" onChange={handlePurposeChange} />
//                       <label htmlFor="relationStatusyes">Yes</label>
//                       <input type="radio" name="relationStatus" id="relationStatusno" value="relationStatusNo" onChange={handlePurposeChange} />
//                       <label htmlFor="relationStatusno">No</label>
//                     </div>
//                   </div>)
//                 }
//                 {liveAbroad && (
//                   <div className="flex flex-col gap-6 max-md:flex-col items-start">
//                     <div className="flex max-md:flex-col items-center gap-2">
//                       <label>4.&nbsp;What is the relationship with him/her?</label>
//                       <input type="text" name="relationWith" id="relationWith" required />
//                     </div>
//                     <div className="flex items-center justify-center gap-2">
//                       <label>5.&nbsp;Where are they living?</label>
//                       <input type="text" name="relationLive" id="relationLive" required />
//                     </div>
//                     <div className="flex max-md:flex-col items-center gap-2">
//                       <label>6.&nbsp;What is their occupation?</label>
//                       <input type="text" name="relationOccupation" id="relationOccupation" required />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {showMigrationDetails && (
//               <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:px-6">
//                 <h1 className="form font-bold text-yellow text-xl pb-2 max-md:text-[22px] max-md:text-center">Migration & Family History</h1>
//                 <hr className="w-full max-md:w-screen" />
//                 <div className="flex flex-col gap-6 lg:gap-10 py-4 lg:py-12 max-md:w-screen max-md:px-6">
//                   <div className="flex gap-6 max-md:flex-col max-md:items-start items-center">
//                     <label>1.&nbsp;Traveling country?</label>
//                     <input type="text" name="country" id="country" />
//                   </div>
//                   <div className="flex gap-6 max-md:flex-col max-md:items-start items-center">
//                     <label>2.&nbsp;Have you traveled before?</label>
//                     <input type="radio" name="traveledBefore" id="traveledBeforeyes" value="traveledBeforeYes" onChange={handlePurposeChange} />
//                     <label htmlFor="traveledBeforeyes">Yes</label>
//                     <input type="radio" name="traveledBefore" id="traveledBeforeno" value="traveledBeforeNo" onChange={handlePurposeChange} />
//                     <label htmlFor="traveledBeforeno">No</label>
//                   </div>
//                   {travelHistory && (
//                     <div className="flex flex-col gap-6 max-md:flex-col items-start">
//                       <div className="flex max-md:flex-col items-center gap-2">
//                         <label>Where have you been to?</label>
//                         <input type="text" name="travelHistory" id="travelHistory" />
//                       </div>
//                     </div>
//                   )}
//                   <div className="flex gap-6 max-md:flex-col max-md:items-start items-center">
//                     <label>3.&nbsp;Do you have any relatives in the country you wish to migrate?</label>
//                     <input type="radio" name="relationAbroad" id="relationAbroadyes" value="relationAbroadYes" />
//                     <label htmlFor="relationAbroadyes">Yes</label>
//                     <input type="radio" name="relationAbroad" id="relationAbroadno" value="relationAbroadNo" />
//                     <label htmlFor="relationAbroadno">No</label>
//                   </div>

//                   <div className="flex gap-2 max-md:flex-col max-md:items-start items-center">
//                     <p>4.&nbsp;Are you traveling through an agency or is someone sponsoring you?</p>
//                     <input type="radio" name="agency/sponsorship" id="agency" value="Agency" onChange={handlePurposeChange} />
//                     <label htmlFor="agency">Agency</label>
//                     <input type="radio" name="agency/sponsorship" id="sponsorship" value="Sponsorship" onChange={handlePurposeChange} />
//                     <label htmlFor="sponsorship">Sponsoring me</label>
//                     <input type="radio" name="agency/sponsorship" id="none" value="None" onChange={handlePurposeChange} />
//                     <label htmlFor="none">None</label>
//                   </div>
//                   {agencyName && (
//                     <div className="flex flex-col gap-6 max-md:flex-col items-start">
//                       <div className="flex max-md:flex-col items-center gap-2">
//                         <label>5.&nbsp;What is the name of the agency?</label>
//                         <input type="text" name="agencyName" id="agencyName" />
//                       </div>
//                       <div className="flex max-md:flex-col items-center gap-2">
//                         <label>6.&nbsp;Where is the agency located?</label>
//                         <input type="text" name="agencyLocation" id="agencyLocation" />
//                       </div>
//                     </div>
//                   )}
//                   {sponsoringMe && (
//                     <div className="flex flex-col gap-6 max-md:flex-col items-start">
//                       <div className="flex max-md:flex-col items-center gap-2">
//                         <label>5.&nbsp;What is the relationship with him/her?</label>
//                         <input type="text" name="sponsorRelation" id="sponsorRelation" />
//                       </div>
//                       <div className="flex max-md:flex-col items-center gap-2">
//                         <label>6.&nbsp;What is his/her occupation?</label>
//                         <input type="text" name="sponsorResidence" id="sponsorResidence" />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//             <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center ">
//               <h1 className="form font-bold text-yellow text-xl pb-2 max-md:text-[22px] max-md:text-center">Mortgage Property Details </h1>
//               <hr className="w-full max-md:w-screen" />
//               <div className="flex flex-col gap-6 lg:gap-6 py-4 lg:py-12 max-md:w-screen max-md:px-5">
//                 <div className="flex max-md:flex-col items-center gap-2 lg:gap-0 lg:justify-between">
//                   <p>1.&nbsp;Do you have a property to mortage with us?</p>
//                   <input type="text" name="mortgage property" id="mortgage property" required />
//                 </div>
//                 <div className="flex max-md:flex-col items-center gap-2  max-md:items-start lg:gap-0 lg:justify-between">
//                   <p>2.&nbsp;Where is it located?</p>
//                   <input type="text" name="property location" id="property location" required />
//                 </div>
//                 <div className="flex max-md:flex-col items-center gap-2 lg:gap-0 lg:justify-between">
//                   <p>3.&nbsp;What is the estimated value of the property?</p>
//                   <input type="text" name="property valuation" id="property valuation" required />
//                 </div>
//                 <div className="flex max-md:flex-col items-center gap-2 lg:gap-0 lg:justify-between">
//                   <p>4.&nbsp;Have you previously taken any loans by mortgaging this property?</p>
//                   <input type="text" name="before loans" id="before loans" required />
//                 </div>
//               </div>
//               <div className="max-md:w-full my-6">
//                 <button
//                   type="submit"
//                   className="bg-yellow p-3 w-[170px] max-md:text-xl max-md:w-full rounded-full text-white font-bold"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//             <small><span className="text-red-600">*</span>Interest rates are low only for a short period of time </small>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };

// export default Loan;
