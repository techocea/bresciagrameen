import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { footerData } from "../data";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <section className="bg-black p-16 max-md:p-4 text-white lg:text-[24px]">
      <div className="flex max-md:flex-col items-center justify-between max-md:justify-normal">
        <div className="flex items-center gap-3">
          <Link to="/">
            <div className="flex flex-col text-white font-bold">
              <h1 className="text-2xl lg:text-3xl max-md:text-[16px]">
                Brescia Grameen
              </h1>
              <p className="header__p text-[18px] lg:text-[24px] max-md:text-sm tracking-wider">
                More than a solution
              </p>
            </div>
          </Link>
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
        <div className="flex flex-col gap-2">
          <strong>Address:</strong>
          <a
            href="https://maps.app.goo.gl/3DGvLhf3hYEM9a519"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            No 88/2 Chillaw Road,Kattuwa,Negombo
          </a>
          <br />
          <strong>Hotline:</strong>
          <a href="tel:0312233329" className="link">031 22 33 329</a>
          <br />
          <strong>General Number:</strong>
          <a href="tel:0777711335" className="link">077 77 11 335</a>
          <br />
          <strong>Email:</strong>
          <p className="link">info@bresciagrameen.lk</p>
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
                  className="link flex flex-col max-md:flex-col max-md:items-start justify-between mt-4"
                >
                  {list}
                </Link>
              </ul>
            ))}
          </div>
        ))}
      </div>
      <div className="flex max-md:flex-col border-t border-t-white items-center justify-between mt-10">
        <p>© 2024. Brescia Grameen Pvt Ltd</p>
        <p>webizera</p>
      </div>
    </section>
  );
};

export default Footer;
