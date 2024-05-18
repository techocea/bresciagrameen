import { aboutSupportData, serviceData } from "../data";
import plane from "../assets/plane.png";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <section className="h-full max-md:h-full flex items-center justify-center py-32 max-md:py-16 bg-[#b7b6b6]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:gap-y-6 max-md:py-10">
          {serviceData.map((item) => (
            <div
              className="flex flex-col gap-y-3 w-[300px] items-center text-center"
              key={item.id}
            >
              <span className="text-white w-12 h-12 rounded-full bg-yellow flex items-center justify-center">
                {item.icons({ size: 28 })}
              </span>
              <h6 className="font-semibold text-xl text-[#252424]">
                {item.title}
              </h6>
              <p className="text-[#161616] ">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <hr className="text-white/50 w-10" />
      <section className="flex lg:py-32 lg:px-16 max-md:px-8 max-md:py-16 justify-evenly xl:justify-between items-center max-md:items-start max-md:flex-col  bg-[#b7b6b6] ">
        <div className="flex max-md:flex-col max-md:w-full justify-center gap-x-10  w-full  items-center">
          <div className="flex flex-col gap-y-4 lg:gap-y-10 ">
            <div className="flex flex-col max-w-[809px] max-md:w-full lg:gap-y-6 max-md:gap-y-4 ">
              <h1 className="text-4xl max-md:text-lg max-md:leading-[40px] leading-[60px] font-bold text-[#161616]">
                Providing{" "}
                <span className="text-yellow bg-white pr-4">
                  Financial&nbsp; Support
                </span>
                &nbsp;for Migration: Empowering Dreams
              </h1>
              <p className="text-[#161616] max-md:text-[16px] max-w-lg">
                By providing financial support for migration, we can empower
                individuals to chase their dreams and contribute to a more
                vibrant and prosperous future for all.
              </p>
            </div>
            <div className="flex max-md:flex-col lg:gap-y-10 max-md:gap-y-6 gap-x-6">
              {aboutSupportData.map((item, index) => (
                <>
                  <div key={index} className="max-w-[355px]">
                    <h4 className="xl:text-xl md:text-lg  font-semibold text-[#161616]">
                      {item.topics[0]}
                    </h4>
                    <ol className="list-decimal pl-3 flex flex-col gap-y-1.5 text-[#161616] max-md:text-[16px]">
                      {item.points.slice(0, 3).map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ol>
                  </div>
                  <div key={index}>
                    <h4 className="xl:text-xl md:text-lg  font-semibold text-[#161616]">
                      {item.topics[1]}
                    </h4>
                    <ol className="list-decimal pl-3 flex flex-col gap-y-1.5 text-[#161616] max-md:text-[16px]">
                      {item.points.slice(3, 6).map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ol>
                  </div>
                </>
              ))}
            </div>
            <div className="max-md:flex max-md:items-center max-md:justify-center ">
              <Button
                variant="default"
                className="mt-4 max-md:mb-8 max-md:w-full"
              >
                <Link to="services">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <img
              src={plane}
              alt="plane"
              width={451}
              height={381}
              className="max-md:w-[355px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
