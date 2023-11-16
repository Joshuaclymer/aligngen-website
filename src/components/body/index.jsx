import Anchor from "./anchor";
import Abstract from "./abstract";
import { Outline } from "./outline";
import Example from "./example";
import Data from "../Data/AllData.jsx";
import BenchmarkData from "../Data/BenchmarkData.jsx";
import Baselines from "../Data/Baselines.jsx";
import hero from "../../assets/images/hero_horizontal.png";
import heroMobile from "../../assets/images/hero_mobile.png";
import React, { useState, useEffect } from "react";

const BodyPage = () => {
  const [heroImage, setHeroImage] = useState(hero);

  const isMobile = () => window.innerWidth <= 768;
  useEffect(() => {
    const handleResize = () => {
      if (isMobile()) {
        setHeroImage(heroMobile);
      } else {
        setHeroImage(hero);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // call the function initially to set the image based on the initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="body">
        {/* <Anchor /> */}
        <div style={{width:"100%"}}>
          <div className="outline__image" style={{marginBottom: '5vh'}}>
            <img src={heroImage} alt="hero" />
          </div>
          <Abstract />
          <Baselines />
          { isMobile() ? <div style={{fontStyle: 'italic'}}>View on desktop to browse datasets</div> : null}
          { isMobile() ? null : <BenchmarkData />}
          { isMobile() ? null :<Data />}
        </div>
      </div>
    </div>
  );
};

export default BodyPage;

// const BodyPage = () => {
//   return (
//     <div>
//       <div className="body">
//         {/* <Anchor /> */}
//         <div style={{width:"100%"}}>
//           <div className="outline__image">
//             <img src={hero} alt="hero horizontal" />
//           </div>
//           <Abstract />
//           <Baselines />
//           <BenchmarkData />
//         <Data />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodyPage;
