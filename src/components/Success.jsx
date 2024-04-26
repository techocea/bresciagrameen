import handShake from "../assets/handShake.png";
import SuccessCard from "./SuccessCard";

const Success = () => {
  return (
    <>
      <div className="relative">
        <img
          src={handShake}
          alt="handshake"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-3  max-md:grid-cols-1 gap-x-12 max-md:gap-y-12">
          <SuccessCard title="#1" setting="In city" />
          <SuccessCard title="39+" setting="Successful students" />
          <SuccessCard title="159+" setting="Skillful customers" />
        </div>
      </div>
    </>
  );
};

export default Success;
