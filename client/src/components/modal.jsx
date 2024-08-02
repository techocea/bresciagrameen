import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ showModal, handleShowPopup }) => {
  return (
    <div className="bg-light-gray w-[500px] lg:max-w-40  p-2 ">
      <ul className="font-normal flex flex-col max-md:items-center max-md:justify-center w-full">
        <Link
          to="/services/student-visa"
          className=" hover:text-primary-orange"
        >
          Student Visa
        </Link>
        <Link
          to="/services/work-visa"
          className=" hover:text-primary-orange py-2"
        >
          Work Visa
        </Link>
        <Link
          to="/services/study-abroad"
          className=" hover:text-primary-orange"
        >
          Study Abroad
        </Link>
        <Link
          to="/services/gold-pawning"
          className=" hover:text-primary-orange py-2"
        >
          Gold Pawning
        </Link>
      </ul>
    </div>
  );
};

export default Modal;
