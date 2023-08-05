import React from "react";
import Welcome from "./components/Welcome";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Footer from "../../common/components/Footer";
import Plans from "./components/Plans";

const Landing = () => {
  return (
    <div>
      <Welcome />
      <Features />
      <Plans />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
