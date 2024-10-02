import React from "react";
import {InfoAboutContext} from "../contexts/InfoAbout";
import { useContext } from "react";

function About() {
  const infoAbout = useContext (InfoAboutContext)
  return (
    <div>
      <h1>Це сторінка про нас</h1>
      <p>{` ${infoAbout }`}</p>
    </div>
  );
}

export default About;
