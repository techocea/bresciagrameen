import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/mains/anniversary-logo.png";
import samplePDF from "../assets/pdf/sample.pdf";
import { FaRegUser } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import Modal from "./modal";

const Header = ({ isTransparent }) => {
  const { pathname } = useLocation();
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleShowPopup = () => {
    setShowModal(!showModal);
  };
  const handleNav = () => {
    setNav(!nav);
  };
  const handleAccordion = (e) => {
    e.stopPropagation();
    setAccordionOpen(!accordionOpen);
  };

  return (
    <header
      className={`z-10 flex items-center justify-between w-full p-4 lg:px-16 ${
        isTransparent ? "bg-transparent" : "bg-dark-gray"
      }`}
    >
      <div className="flex w-full 2xl:max-w-5xl 2xl:mx-auto">
        <Link to="/">
          <img src={logo} width={100} height={50} alt="brescia grameen logo" />
        </Link>
        <nav className="max-md:hidden flex items-center justify-center gap-10 w-full">
          <ul className="text-white flex gap-10 font-medium">
            <Link
              to="/"
              className={`${pathname === "/" ? "text-primary-orange" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                pathname === "/about" ? "text-primary-orange" : ""
              }`}
            >
              About
            </Link>
            <p
              className="cursor-pointer relative"
              onClick={handleShowPopup}
              onMouseEnter={handleShowPopup}
              onMouseLeave={handleShowPopup}
            >
              Services
              {showModal && (
                <div className="absolute top-6 w-40 z-20">
                  <Modal />
                </div>
              )}
            </p>
            <Link
              to="/news"
              className={`${pathname === "/news" ? "text-primary-orange" : ""}`}
            >
              News
            </Link>
            <Link
              to="/contact"
              className={`${
                pathname === "/contact" ? "text-primary-orange" : ""
              }`}
            >
              Contact
            </Link>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="">
            <a
              href={samplePDF}
              download="Brescia Grameen 10th Anniversary Book"
              className="flex items-center justify-center gap-x-2 hover:text-primary-orange"
            >
              <GoDownload />
              Download
            </a>
          </div>

          {/* mobile navigation */}
          <div className="block lg:hidden cursor-pointer" onClick={handleNav}>
            {!nav ? (
              <TfiMenu size={32} className="text-primary-orange" />
            ) : (
              <FaTimes size={32} className="text-primary-orange" />
            )}
            <div
              className={`${
                nav
                  ? "bg-black absolute z-20 top-20 left-0 h-auto py-20 w-full ease-in-out duration-500"
                  : "bg-black absolute z-20 top-[-100%] left-0 h-auto w-full ease-in-out duration-500"
              }`}
            >
              <nav className="flex items-center justify-center gap-10 w-full h-full">
                <ul className="text-white flex flex-col items-center justify-center gap-10 font-medium">
                  <li>
                    <NavLink
                      to="/"
                      className={`${
                        pathname === "/" ? "text-primary-orange" : ""
                      }`}
                      onClick={() => setNav(false)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={`${
                        pathname === "/about" ? "text-primary-orange" : ""
                      }`}
                      onClick={() => setNav(false)}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="relative">
                    <p
                      className="cursor-pointer flex items-center justify-center text-center gap-2"
                      onClick={handleAccordion}
                    >
                      Services
                      <FaChevronDown />
                    </p>
                    <div
                      onMouseLeave={handleAccordion}
                      className={`${
                        accordionOpen
                          ? "max-h-screen ease-in duration-500"
                          : "max-h-0 overflow-hidden ease-out duration-500"
                      }`}
                    >
                      <Modal />
                    </div>
                  </li>
                  <li>
                    <NavLink
                      to="/news"
                      className={`${
                        pathname === "/news" ? "text-primary-orange" : ""
                      }`}
                      onClick={() => setNav(false)}
                    >
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={`${
                        pathname === "/contact" ? "text-primary-orange" : ""
                      }`}
                      onClick={() => setNav(false)}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
