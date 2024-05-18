import { MdEmail, MdMeetingRoom } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Map from "../utils/Map";

export default function FindUs() {
  return (
    <div className="bg-[#b7b6b6] h-full px-20 max-sm:px-5 lg:px-52">
      <div className="flex flex-col gap-y-5 py-20 items-center justify-center">
        <div className="text-center mb-2">
          <h3 className="text-[#161616] text-2xl  font-bold">CONTACT</h3>
          <p className="text-gray">We`d like to hear from you...</p>
        </div>
        <div className="flex max-sm:flex-col-reverse items-center justify-center">
          {/* social icons */}
          <div className="bg-black text-white w-20 max-sm:w-[315px] h-[490px] max-sm:h-20 flex flex-col max-sm:flex-row gap-y-[2rem] max-sm:justify-evenly  items-center justify-center ">
            <FaFacebookSquare />
            <FaFacebookMessenger />
            <BsInstagram />
            <FaWhatsapp />
            <FaLinkedin />
          </div>
          {/* Get In Touch */}
          <div className="bg-yellow max-w-[315px] h-full p-4 shadow-lg text-gray-700 shadow-slate-200/50 rounded-lg">
            <h1 className="capitalize text-7xl font-bold leading-[6rem] lg:leading-[80px] text-white border-b pb-2">
              Get in <br />
              Touch
            </h1>
            <div className="flex flex-col gap-y-[3rem] py-2">
              <div className="flex items-center gap-x-4 mt-[3rem]">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <MdMeetingRoom size={32} />
                </p>
                <div className="flex flex-col gap-y-2.5 text-white">
                  <h4>Meet Us</h4>
                  <p>Negombo,Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <PiPhoneCallFill size={32} />
                </p>
                <div className="flex flex-col gap-y-2.5 text-white">
                  <h4>Call Us</h4>
                  <p>077 11 33 5</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <MdEmail size={32} />
                </p>
                <div className="flex flex-col gap-y-2.5 text-white">
                  <h4>Email Us</h4>
                  <p>info@bresciagrameen.lk</p>
                </div>
              </div>
            </div>
          </div>
          {/* google map */}
          <div>
            <Map />
          </div>
        </div>
        <div className="mt-3">
          <Link to="loans">
            <Button variant="default">Contact Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
