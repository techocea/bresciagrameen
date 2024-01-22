"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { navLinks, serviceData } from "../data";
import { Link } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
const Header = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
      <header className="fixed w-screen max-h-full z-20 bg-white flex items-center justify-between  shadow-3xl py-4 mb-[100px] lg:py-8 px-24 max-md:px-4">
        <div className="w-full flex z-2 h-full items-center justify-between gap-8">
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
          <div className="flex items-center gap-8 max-md:hidden lg:text-[24px]">
            {navLinks.map((navItem) => (
              <Link to={navItem.to} className="hover:text-yellow duration-150 font-semibold"> {navItem.title}</Link>
            ))}
          </div>

        </div>
        <div onClick={handleNav} className="cursor-pointer md:hidden">
          {!nav ? (
            <FaTimes className="text-yellow" size={26} />) : (<HiBars3BottomLeft className="text-yellow font-bold" size={32} />
          )}
          <div
            className={`${!nav
              ? "bg-white fixed z-[16] h-full left-0 top-[97px] w-full ease-in duration-500"
              : "fixed left-[-100%]"}`}
          >
            <div className="">

            </div>
          </div>
        </div>
      </header>
    </>

  );
};

export default Header;
