import baselines from "../../assets/images/baselines.png";
import baselinesMobile from "../../assets/images/baselines_mobile.png";
import React, { useState, useEffect } from "react";

function Baselines() {

  const [baselinesImage, setHeroImage] = useState(baselines);
  const isMobile = () => window.innerWidth <= 768;
  useEffect(() => {
    const handleResize = () => {
      if (isMobile()) {
        setHeroImage(baselinesMobile);
      } else {
        setHeroImage(baselines);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // call the function initially to set the image based on the initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div style={{ width: "100%", display:'flex', justifyContent:'center'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "900px",
          marginBottom: "10vh",
        }}
      >
        <h2 class="section__title">Baselines</h2>
        <img src={baselinesImage} alt="baselines" width="100%" />
      </div>
    </div>
  );
}

export default Baselines;
