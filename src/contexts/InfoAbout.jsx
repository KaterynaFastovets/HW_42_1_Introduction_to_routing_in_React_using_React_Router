import React, { createContext, useState } from "react";
import About from "../components/About";
export const InfoAboutContext = createContext("Важлива інформація!");

function InfoAbout () {
  const infoAbout = useState("Важлива інформація!");
  return (
    <InfoAboutContext.Provider value={infoAbout}>
       <About/>
    </InfoAboutContext.Provider>
  );
}

export default InfoAbout;





