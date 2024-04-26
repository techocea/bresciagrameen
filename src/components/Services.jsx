import { aboutSupportData, serviceData } from "../data";
import plane from "../assets/plane.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="h-full max-sm:h-full flex items-center justify-center py-32 bg-[#b7b6b6]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:gap-y-6 max-sm:py-10">
          {serviceData.map((item) => (
            <div
              className="flex flex-col gap-y-3 w-[300px] items-center text-center"
              key={item.id}
            >
              <span className="text-white w-12 h-12 rounded-full bg-yellow flex items-center justify-center">
                {item.icons({ size: 28 })}
              </span>
              <h6 className="font-semibold text-[#252424]">{item.title}</h6>
              <p className="text-[#161616]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-white/50 w-10" />
      <div className="flex lg:py-32 lg:px-16  max-sm:p-5 md:py-16 justify-evenly xl:justify-between items-center max-sm:items-start max-sm:flex-col  bg-[#b7b6b6] ">
        <div className="flex max-sm:flex-col max-sm:w-[355px]  justify-evenly gap-x-10 xl:gap-0 w-full xl:justify-between items-center">
          <div className="flex flex-col gap-y-4 lg:gap-y-10 ">
            <div className="flex flex-col xl:max-w-[649px] max-sm:w-full lg:gap-y-6 max-sm:gap-y-4 ">
              <h1 className="text-4xl max-sm:text-lg max-sm:leading-[40px] leading-[60px] font-bold text-[#161616]">
                Providing{" "}
                <span className="text-yellow bg-white pr-4">
                  Financial&nbsp; Support
                </span>
                &nbsp;for Migration: Empowering Dreams
              </h1>
              <p className="text-[#161616] max-sm:text-[16px] max-w-lg">
                By providing financial support for migration, we can empower
                individuals to chase their dreams and contribute to a more
                vibrant and prosperous future for all.
              </p>
            </div>
            <div className="flex max-sm:flex-col lg:gap-y-10 max-sm:gap-y-6 gap-x-6">
              {aboutSupportData.map((item, index) => (
                <>
                  <div key={index} className="w-[355px]">
                    <h4 className="xl:text-xl md:text-lg  font-semibold text-[#161616]">
                      {item.topics[0]}
                    </h4>
                    <ol className="list-decimal pl-3 flex flex-col gap-y-1.5 text-[#161616] max-sm:text-[16px]">
                      {item.points.slice(0, 3).map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ol>
                  </div>
                  <div key={index}>
                    <h4 className="xl:text-xl md:text-lg  font-semibold text-[#161616]">
                      {item.topics[1]}
                    </h4>
                    <ol className="list-decimal pl-3 flex flex-col gap-y-1.5 text-[#161616] max-sm:text-[16px]">
                      {item.points.slice(3, 6).map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ol>
                  </div>
                </>
              ))}
            </div>
            <div className="max-sm:flex max-sm:items-center max-sm:justify-center">
              <Link to="services">
                <Button variant="default" className="mt-4 max-sm:mb-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={plane}
              alt="plane"
              width={475}
              height={450}
              className="max-sm:max-w-[305px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
