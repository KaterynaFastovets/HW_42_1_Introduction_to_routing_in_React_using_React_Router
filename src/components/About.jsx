import React from "react";
import {InfoAboutContext} from "../contexts/InfoAbout";
import { useContext } from "react";
import Contact from "../components/Contact";


function About() {
  const infoAbout = useContext (InfoAboutContext)
  return (
    <div className="child">
      <h1>Це сторінка про нас</h1>
      <p>{` ${infoAbout}`}</p>
      <Contact/>
    </div>
  );
}

export default About;
