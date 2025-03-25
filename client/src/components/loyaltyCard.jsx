import React from "react";
import loyaltyCard from "../assets/mains/loyalty-card.png";

// import { motion } from "framer-motion";
// import {
//   LoyaltyCardTextVariants,
//   LoyaltyCardVariants,
//   FadeUpVariants,
// } from "../utils/variants";

const LoyaltyCard = () => {
  return (
    <section className="bg-dark-gray max-md:p-10 lg:px-16 lg:py-14 h-auto">
      <div className="2xl:max-w-5xl 2xl:w-full 2xl:mx-auto ">
        <div className="flex max-md:flex-col-reverse max-md:gap-16 items-center">
          <h1 className="lg:max-w-2xl text-5xl leading-[72px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-[#C5BB6A]">
            Introducing the B-Mart Loyalty Card
          </h1>
          <img src={loyaltyCard} width={450} height={450} alt="loyalty card" />
        </div>
        <div className="text-white flex flex-col gap-5 lg:gap-8 pt-16 lg:pt-24">
          <p className="font-regular lg:text-[20px]">
            We're thrilled to introduce the{" "}
            <span className="text-[28px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-orange to-[#C5BB6A]">
              B-Mart Loyalty Card,
            </span>
            &nbsp; first time in Negombo, a revolutionary way for our valued
            customers in Negombo to save and enjoy exclusive benefits. As a
            B-Mart Loyalty Cardholder, you can earn points with every purchase
            at our supermarket, which you can redeem for fantastic rewards.
          </p>
          <p className="font-regular lg:text-[20px]">
            But that's not all! Our loyalty card goes beyond just shopping at
            B-Mart. You can also use it at participating gas filling stations,
            giving you more opportunities to save every time you fill up your
            tank.
          </p>
          <p className="font-regular lg:text-[20px]">
            Join the B-Mart Loyalty Program today and start enjoying the perks
            of being a loyal customer. Experience more savings, more
            convenience, and more rewards, exclusively at B-Mart!
          </p>
        </div>
      </div>
    </section>
  );
};
export default LoyaltyCard;
