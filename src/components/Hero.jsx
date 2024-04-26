import { Link } from "react-router-dom";
import heroImg from "../assets/heroImg.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative w-full">
      <img
        src={heroImg}
        alt="heroImg"
        className="relative max-md:h-screen object-cover"
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col gap-y-5 max-md:gap-y-10 items-center justify-center">
        <h1 className="text-[57px] max-sm:text-2xl leading-[60px] text-center text-white w-[680px] max-md:w-auto">
          Empowering Dreams Through Financial Support and Guidance
        </h1>
        <p className=" text-white font-medium w-[610px] max-sm:max-w-[315px] text-center">
          We understand the importance of financial support when it comes to
          pursuing your dreams of migration, study, and work{" "}
        </p>
        <div className="">
          <Link to="loans">
            <Button variant="default">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
