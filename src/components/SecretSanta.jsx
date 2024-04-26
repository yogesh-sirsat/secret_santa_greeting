// src/SecretSantaWebsite.js
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const SecretSantaWebsite = () => {
  return (
    <div className="animation min-h-screen min-w-screen">
      <Parallax pages={1} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="xmas-main"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="moon"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="sky-bg"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="buildings"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="lightings"></div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
};

export default SecretSantaWebsite;
