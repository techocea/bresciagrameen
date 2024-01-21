import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { footerData } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-black p-16 max-md:p-4 text-white lg:text-[24px]">
      <div className="flex max-md:flex-col items-center justify-between max-md:justify-normal">
        <div className="flex flex-col gap-3">
          <p className="text-2xl">Brescia Grameen</p>
          <p className="header__p text-[18px] tracking-wider">
            More than a solution
          </p>
        </div>
        <div className="flex items-center gap-10 my-4">
          <a
            href="https://facebook.com/BresciaGrameen/"
            target="_blank"
            rel="noreferrer"
          >
            <CiFacebook size={80} className="hover:text-yellow delay-150" />
          </a>
          <CiInstagram size={80} className="hover:text-yellow delay-150" />
          <CiLinkedin size={80} className="hover:text-yellow delay-150" />
        </div>
      </div>
      <div className="flex max-md:flex-col items-start justify-between mt-10">
        <div>
          <strong>Address:</strong>
          <p>No 88/22, Chillaw Road, Kattuwa, Negombo</p>
          <br />
          <strong>Hotline:</strong>
          <p>0312233329</p>
          <br />
          <strong>General Number:</strong>
          <p>0777711335</p>
          <br />
          <strong>Email:</strong>
          <p>info@bresciagrameen.lk</p>
        </div>
        {footerData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col max-md:flex-col max-md:items-start  justify-between mt-8"
          >
            <h1 className="capitalize">{data.title}</h1>
            {data.lists.map((list, index) => (
              <ul key={index}>
                <Link
                  to={`/${data.to[index]}`}
                  className="underline flex flex-col max-md:flex-col max-md:items-start justify-between mt-4"
                >
                  {list}
                </Link>
              </ul>
            ))}
          </div>
        ))}
      </div>
      <div className="flex max-md:flex-col  items-center justify-between mt-10">
        <p>© 2023. Brescia Grameen Pvt Ltd</p>
        <p>webizera</p>
      </div>
    </section>
  );
};

export default Footer;
