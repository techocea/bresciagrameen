import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Header() {
  const { pathname } = useLocation();
  const [menuDrop, setMenuDrop] = useState(false);
  const [nav, setNav] = useState(false);

  const toggleDropDown = () => {
    setMenuDrop(!menuDrop);
  };

  const closeDropDown = () => {
    setMenuDrop(false);
  };

  const toggleNav = () => {
    setNav(!nav);
  };
  const Services = [
    {
      serviceNames: [
        "Migration Loan",
        "Student Loan",
        "Show Money",
        "Western Union",
        "Gold Pawning",
      ],
      serviceLinks: [
        "migration-loan",
        "student-loan",
        "show-money",
        "western-union",
        "gold-pawning",
      ],
    },
  ];

  return (
    <>
      <header className="bg-gray flex items-center justify-center h-20 ">
        <nav className="max-md:hidden flex text-lg items-center justify-center w-full gap-x-10 ">
          {navLinks.map((item, index) => (
            <div key={item.id} className="relative">
              {item.name && (
                <div>
                  <Link
                    to={item.to}
                    className={`flex items-center ${
                      pathname === item.to
                        ? "text-yellow font-bold"
                        : "font-bold text-white hover:text-yellow"
                    }`}
                    onClick={index === 1 ? toggleDropDown : null}
                    onMouseEnter={index === 1 ? toggleDropDown : null}
                  >
                    {item.name}
                    {index === 1 ? <RiArrowDropDownLine size={32} /> : null}
                  </Link>
                  {index === 1 && menuDrop && (
                    <div
                      className="absolute top-16 z-20 bg-slate-50  rounded-lg shadow-lg w-[200px] h-auto"
                      onMouseLeave={closeDropDown}
                    >
                      {Services.map((serviceItem, serviceItemIndex) => (
                        <div key={serviceItemIndex}>
                          {serviceItem.serviceNames.map((service, index) => (
                            <Link
                              to={`/services/${serviceItem.serviceLinks[index]}`}
                              key={index}
                              className="block rounded-lg px-4 py-2 hover:bg-slate-200 hover:text-yellow"
                            >
                              <p onClick={closeDropDown}>{service}</p>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {item.image && (
                <Link to={item.to} className="text-black">
                  <img src={item.image} alt="logo" width={75} height={75} />
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden max-md:flex items-center justify-between w-full px-4">
          <Link to="/">
            <img src={logo} alt="logo" width={75} height={75} />
          </Link>
          <div onClick={toggleNav} className="cursor-pointer md:hidden ">
            {!nav ? (
              <FaBars className="text-yellow font-bold" size={32} />
            ) : (
              <FaTimes className="text-yellow" size={32} />
            )}
            <div
              className={`${
                nav
                  ? "bg-gray fixed z-[16] h-full left-0 top-20 w-full ease-in duration-500 "
                  : "fixed left-[-100%]"
              }`}
            >
              <div className="flex flex-col items-center text-center justify-center gap-y-2.5 translate-y-1/2">
                {navLinks.map((item, index) => (
                  <div key={item.id} className="relative">
                    {item.name && (
                      <div>
                        <Link
                          to={item.to}
                          className={`flex items-center ${
                            pathname === item.to
                              ? "text-yellow font-bold"
                              : "font-bold text-white hover:text-yellow"
                          }`}
                          onClick={index === 1 ? toggleDropDown : null}
                          onMouseEnter={index === 1 ? toggleDropDown : null}
                        >
                          {item.name}
                          {index === 1 ? (
                            <RiArrowDropDownLine size={32} />
                          ) : null}
                        </Link>
                        {index === 1 && menuDrop && (
                          <div
                            className="absolute top-16 z-20 bg-slate-50  rounded-lg shadow-lg w-[200px] h-auto"
                            onMouseLeave={closeDropDown}
                          >
                            {Services.map((serviceItem, serviceItemIndex) => (
                              <div key={serviceItemIndex}>
                                {serviceItem.serviceNames.map(
                                  (service, index) => (
                                    <Link
                                      to={`/services/${serviceItem.serviceLinks[index]}`}
                                      key={index}
                                      className="block  rounded-lg px-4 py-2 hover:bg-slate-200 hover:text-yellow"
                                    >
                                      <p
                                        onClick={closeDropDown}
                                        className="flex items-center justify-center text-center"
                                      >
                                        {service}
                                      </p>
                                    </Link>
                                  )
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

// function DropDownServiceMenu() {
//   return (
//     <div className="absolute top-16 bg-slate-50 rounded-lg shadow-lg w-full h-full">
//       {navLinks[1].services[(0, 1)].map((serviceName, serviceLink, index) => (
//         <Link to={`/services/${serviceLink}`} key={index}>
//           {serviceName}
//         </Link>
//       ))}
//     </div>
//   );
// }
