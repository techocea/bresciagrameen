"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { serviceData } from "../data";
import { Link } from "react-router-dom";

const Header = () => {
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const navLinks = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "About", to: "/about" },
    { id: 3, title: "Services", dropdown: true },
    { id: 4, title: "Loan", to: "/loans" },
  ];

  return (
    <header className="bg-white shadow-3xl py-4 lg:py-8 px-24 max-md:px-4">
      <div className="flex h-full  items-center justify-between gap-8 ">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              width={80}
              height={80}
              className="max-md:w-[65px]"
            />
          </Link>
          <div className="flex flex-col text-black font-bold">
            <h1 className="text-xl lg:text-3xl max-md:text-[16px]">
              Brescia Grameen
            </h1>
            <p className="header__p text-[16px] lg:text-[24px] max-md:text-sm tracking-wider">
              More than a solution
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center max-md:hidden">
          <nav>
            <ul className="flex items-center gap-6 text-xl">
              {navLinks.map((navlink) => (
                <li key={navlink.id}>
                  {navlink.dropdown ? (
                    <div className="flex items-center gap-1 text-slate-800 text-lg ">
                      <button
                        onClick={toggleServicesDropdown}
                        className="text-black transition hover:text-yellow duration-500 text-xl lg:text-[24px]"
                      >
                        {navlink.title}
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="absolute z-10 right-48 top-20 lg:right-40 mt-2 w-[250px] rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1 relative">
                            {serviceData.map((service) => (
                              <Link
                                key={service.id}
                                to={service.to}
                                className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-yellow duration-500"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      <RiArrowDropDownLine />
                    </div>
                  ) : (
                    <Link
                      to={navlink.to}
                      className="text-black transition hover:text-yellow text-xl lg:text-[24px]"
                    >
                      {navlink.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
