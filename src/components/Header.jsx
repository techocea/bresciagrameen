import React from "react";

import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-gray flex items-center justify-center gap-x-4 bg-backround p-4 lg:p-5">
      {navLinks.map((item) => (
        <div key={item.id}>
          {item.name && (
            <Link
              to={item.to}
              className={
                pathname === item.to
                  ? "text-yellow font-bold"
                  : "font-bold text-white hover:text-yellow"
              }
            >
              {item.name}
            </Link>
          )}
          {item.image && (
            <Link to={item.to} className="text-black">
              <img src={item.image} alt="logo" width={75} height={75} />
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Header;
