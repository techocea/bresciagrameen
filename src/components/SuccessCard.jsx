import React from "react";

const SuccessCard = (props) => {
  return (
    <div className="text-white flex flex-col gap-y-3 w-full items-center text-center ">
      <h1 className="text-7xl font-bold">{props.title}</h1>
      <p>{props.setting}</p>
    </div>
  );
};

export default SuccessCard;
