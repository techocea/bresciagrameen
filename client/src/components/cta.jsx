import { Link } from "react-router-dom";

import meshGradient from "../assets/mains/mesh-gradient.png";

const CTA = () => {
  return (
    <div className="relative h-[300px] max-md:h-[480px] max-md:w-full w-3/4">
      <img
        src={meshGradient}
        alt="meshGradient"
        className="absolute h-full w-full rounded-xl"
      />
      <div className="absolute lg:max-w-2xl flex flex-col gap-6 p-6">
        <h1 className="text-4xl font-bold">
          At Brescia Grameen we are here to help you.
        </h1>
        <p className="lg:text-[20px] font-semibold">
          Your questions and feedback are important to us. Just call us or drop
          us an email for all your inquiries and comments.
        </p>
        <div>
          <Link to="/contact">
            <button className="bg-primary-orange py-2 px-4 rounded-full font-bold">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
