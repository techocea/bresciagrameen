import React from "react";

import customers from "../assets/mains/customers.png";
import plane from "../assets/mains/plane.png";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-dark-gray max-md:p-10 lg:px-16 lg:py-14 max-md:h-auto">
      <div className="relative flex">
        <div className="lg:max-w-[775px] w-full flex flex-col gap-6 max-md:gap-8">
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
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            className="text-light-gray font-semibold"
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
            <img
              src={customers}
              width={142}
              height={40}
              alt="customers group"
            />
            <p className="font-semibold text-white">
              <span className="text-green-600 ">5000+</span>
              &nbsp;trusted customers
            </p>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          src={plane}
          width={336}
          height={336}
          alt="plane"
          className="max-md:hidden absolute -top-20 right-[180px]"
        />
      </div>
    </section>
  );
};

export default Hero;
