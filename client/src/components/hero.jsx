import plane from "../assets/mains/plane.png";
import main from "../assets/mains/20.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative px-10 lg:px-16 py-28 lg:py-32 min-h-[600px] w-full z-[-10] -mt-24">
      <div className="absolute inset-0 z-0 ">
        <img
          src={main}
          alt="Brescia Grameen Main image"
          className="top-0 z-[-20] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="relative 2xl:max-w-5xl 2xl:w-full 2xl:mx-auto flex z-10 ">
        <div className="flex flex-col gap-6 max-w-xl w-full 2xl:pl-4 max-md:gap-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="text-6xl max-md:text-3xl font-bold text-white"
          >
            Empowering dreams through&nbsp;
            <span className="text-primary-orange">financial</span> support and
            guidance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            className="text-white font-semibold"
          >
            A customer-focused financial provider that provides financial
            solutions to meet your entire financial needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
            className="flex flex-col gap-4"
          >
            <p className="font-semibold text-white">
              <span className="text-green-600 ">5000+</span>
              &nbsp;trusted customers
            </p>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 800, y: 120 }}
          animate={{ opacity: 1, x: 180, y: 120 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          src={plane}
          width={336}
          height={336}
          alt="plane"
          className="max-md:hidden absolute -top-20 right-[180px] "
        />
      </div>
    </section>
  );
};

export default Hero;
