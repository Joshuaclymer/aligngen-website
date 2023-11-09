import React from "react";
import Anchor from "./anchor";
import Abstract from "./abstract";
import { Outline } from "./outline";
import Example from "./example";
import Data from "../Data/AllData.jsx";
import BenchmarkData from "../Data/BenchmarkData.jsx";
import Baselines from "../Data/Baselines.jsx";
import hero from "../../assets/images/hero_horizontal.png";

const BodyPage = () => {
  return (
    <div>
      <div className="body">
        {/* <Anchor /> */}
        <div style={{width:"100%"}}>
          <div className="outline__image">
            <img src={hero} alt="hero horizontal" />
          </div>
          <Abstract />
          <Baselines />
          <BenchmarkData />
        <Data />
        </div>
      </div>
    </div>
  );
};

export default BodyPage;
