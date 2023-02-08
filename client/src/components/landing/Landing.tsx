import React from "react";
import Bienvenida from "./Bienvenida";
import Caracteristicas from "./Caracteristicas";
import Faq from "./Faq";
import Footer from "./Footer";
import Planes from "./Planes";

const Landing = () => {
  return (
    <div>
      <Bienvenida />
      <Caracteristicas />
      <Planes />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
