import React from "react";

import logo from "../assets/mains/anniversary-logo.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-gray border-t border-light-gray">
      <div className="flex flex-col gap-6 items-start p-10 xl:px-16 lg:py-12">
        <div className="flex items-center justify-between w-full">
          <img src={logo} width={100} height={50} alt="brescia grameen logo" />
          <div className="flex gap-5">
            <FaFacebookF size={28} className="text-white" />
            <FaInstagram size={28} className="text-white" />
            <FaLinkedin size={28} className="text-white" />
          </div>
        </div>
        <div className="flex max-md:flex-col max-md:gap-4 items-start justify-between w-full text-light-gray text-sm font-normal pt-10">
          <ul>
            <li>Address: No 88/2, Chillaw Road Kattuwa Negombo</li>
            <li>Hotline: 031 22 33 329</li>
            <li>Email: info@bresciagrameen.lk</li>
          </ul>
          <ul>
            <li>Some Useful Links</li>
            <li>Home</li>
            <li>About</li>
            <li>News</li>
          </ul>
          <ul>
            <li>Loan Services</li>
            <li>Work Visa Loans</li>
            <li>Student Visa Loans</li>
            <li>Personal Loans</li>
          </ul>
          <ul>
            <li>Other Services</li>
            <li>Loyalty Cards</li>
            <li>Gold Pawning</li>
            <li>Western Union</li>
            <li>Moneygram</li>
            <li>Ria</li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
