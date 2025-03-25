import React from "react";

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="bg-dark-gray p-4 lg:max-w-[240px] w-full text-white flex flex-col gap-4 items-center text-center">
      <span className="text-primary-orange">{icon}</span>
      <h2 className="uppercase font-bold">{title}</h2>
      <p className="font-regular">{description}</p>
    </div>
  );
};

export default AboutCard;
