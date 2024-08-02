import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import LoyaltyCard from "./components/loyaltyCard";
// import OtherServices from "./components/otherServices";

const App = () => {
  return (
    <div className="h-auto">
      <Hero />
      <About />
      <LoyaltyCard />
      {/* <OtherServices /> */}
    </div>
  );
};

export default App;
