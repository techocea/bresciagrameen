import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-y-4 text-center items-center justify-center border border-yellow rounded-lg p-4 w-[550px]">
        <TiTick size={100} className="text-green-500 font-bold" />
        <h1 className="text-4xl max-md:text-2xl">
          Thank you for contacting us!
        </h1>
        <p className="text-slate-600">We have recieved your message</p>
        <p className="text-slate-600">We`ll reach you out soon</p>
        <Link to="/" className="underline">
          Back to Home
        </Link>
      </div>
    </>
  );
}