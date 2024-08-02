import React from "react";

import westernUnion from "../assets/western-union.png";
import moneyGram from "../assets/money-gram.png";
import ria from "../assets/ria.png";

const OtherServices = () => {
  return (
    <section>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <img
          src={westernUnion}
          width={150}
          height={100}
          className="object-cover"
          alt="westernUnion"
        />
        <img
          src={moneyGram}
          width={150}
          height={100}
          className="object-cover"
          alt="moneyGram"
        />
        <img
          src={ria}
          width={150}
          height={70}
          className="object-cover"
          alt="ria"
        />
      </div>
    </section>
  );
};

export default OtherServices;
