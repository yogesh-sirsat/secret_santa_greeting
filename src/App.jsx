import { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MouseParticles from "react-mouse-particles";
import AnimatedCursor from "react-animated-cursor";

// import "./App.css";

// Little helpers ...
const url = (name, wrap) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function App() {
  const parallax = useRef(null);
  const [cursorRingSize, setCursorRingSize] = useState(70);

  return (
    <>
      <div className="hidden xl:block animation min-h-screen min-w-screen">
        {/* <Cursor
          showRing={true}
          color="#d4bdff"
          ringSize={cursorRingSize}
          cursorSize={12}
          ringBorder={2}
        /> */}
        <AnimatedCursor
          innerSize={8}
          outerSize={45}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#d4bdff",
          }}
          outerStyle={{
            border: "3px solid #d4bdff",
          }}
        />
        <MouseParticles
          g={1}
          color="random"
          level={6}
          cull="MuiSvgIcon-root,MuiButton-root"
        />
        <Parallax ref={parallax} pages={8}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={7}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

          <ParallaxLayer offset={0.1} speed={0.1}>
            <img
              src="/SVG/moon_1.svg"
              className="w-1/4 ml-[16.8rem] 2xl:ml-96 mt-28 2xl:mt-36"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0.43} speed={0.3}>
            <img src="/144ppi/buildings.png" className="w-screen" />
          </ParallaxLayer>

          <ParallaxLayer offset={0.68} speed={0.4}>
            <img
              src="/144ppi/snow_floor.png"
              className="w-screen mt-[13.8rem] 2xl:mt-[14.5rem]"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0.68} speed={0.4}>
            <img
              src="/144ppi/snow_floor.png"
              className="w-screen mt-[15.8rem] 2xl:mt-[22.5rem]"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0.42} speed={0.4}>
            <img src="/144ppi/main_design.png" className="w-screen" />
          </ParallaxLayer>

          <ParallaxLayer offset={0.78} speed={0.4}>
            <img
              src="/orange_cat.png"
              className="w-full max-w-[15rem] 2xl:max-w-[22rem]"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.15}>
            <h1
              onMouseEnter={() => setCursorRingSize(100)}
              onMouseLeave={() => setCursorRingSize(51)}
              className="text-[5.9rem] 2xl:text-9xl text-purple-400 font-bold text-center mt-64 2xl:mt-96"
            >
              Dear xyz, Merry Xmas!
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={0.18} speed={0.3}>
            <img
              src="/144ppi/tree.png"
              className="w-[25.8rem] 2xl:w-auto mt-16"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <img src="/SVG/snow.svg" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
            <img src="/144ppi/lightnings.png" className="w-screen" />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img
              src={url("satellite4")}
              style={{ width: "15%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4.5}
            speed={-0.4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <img src={url("earth")} style={{ width: "60%" }} />
          </ParallaxLayer>

          {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        /> */}

          <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "55%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "70%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "60%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "25%", marginLeft: "30%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "10%", marginLeft: "80%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={6.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url("cloud")}
              style={{ display: "block", width: "20%", marginLeft: "5%" }}
            />
            <img
              src={url("cloud")}
              style={{ display: "block", width: "15%", marginLeft: "75%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={0.6}>
            <img
              src="/police_badge.png"
              style={{ display: "block", width: "12%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-5xl 2xl:text-6xl font-bold text-purple-400 text-start px-24 z-1">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.&quot;
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={1.7} speed={0.4}>
            <img
              src="/turkey.png"
              style={{ width: "12%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={-0.1}>
            <img
              src="/door_back2.png"
              style={{ width: "12%", marginLeft: "45%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.5} speed={-0.2}>
            <img
              src="/pizza_slice2.png"
              style={{ width: "12%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(3)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-5xl 2xl:text-6xl font-bold text-purple-400 text-start px-24">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.&quot;
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={2.7} speed={0.3}>
            <img
              src="/the_office.png"
              style={{ display: "block", width: "12%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3.4} speed={0.2}>
            <img
              src="/best_boss_cup.png"
              style={{ display: "block", width: "12%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.9} speed={-0.1}>
            <img
              src="/lobstar.gif"
              style={{ display: "block", width: "12%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(4)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-5xl 2xl:text-6xl font-bold text-purple-400 text-start px-24">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.&quot;
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={3.7} speed={0.3}>
            <img
              src="/b99.png"
              style={{ display: "block", width: "12%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.3}>
            <img
              src="/central_park.png"
              style={{ display: "block", width: "12%", marginLeft: "45%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4.3} speed={-0.1}>
            <img
              src="/stapler_jellow_t.png"
              style={{ display: "block", width: "12%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(5)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-5xl 2xl:text-6xl font-bold text-purple-400 text-start px-24">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.&quot;
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={4.7} speed={0.3}>
            <img
              src="/jake_king.png"
              style={{ display: "block", width: "12%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={0.3}>
            <img
              src="/sofa.png"
              style={{ display: "block", width: "12%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.3} speed={-0.1}>
            <img
              src="/dog_statue.png"
              style={{ display: "block", width: "12%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={5}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(6)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-5xl 2xl:text-6xl font-bold text-purple-400 text-start px-24">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.&quot;
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={5.6} speed={-0.1}>
            <img
              src="/dundi_award.png"
              style={{ display: "block", width: "12%", marginLeft: "40%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={6.3} speed={-0.1}>
            <img
              src="/gif/candy_cane.gif"
              style={{ display: "block", width: "12%", marginLeft: "70%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={6.5} speed={-0.1}>
            <img
              src="/gif/reindeer.gif"
              style={{ display: "block", width: "12%", marginLeft: "32%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={6}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(7)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-5xl 2xl:text-6xl font-bold text-purple-400 text-start px-24">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.&quot;
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={6.1} speed={-0.3}>
            <img
              src="/gif/ornament.gif"
              style={{ display: "block", width: "12%", marginLeft: "15%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={6.7} speed={0.3}>
            <img
              src="/gif/candle.gif"
              style={{ display: "block", width: "12%", marginLeft: "58%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={7}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(0)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="text-5xl 2xl:text-6xl font-bold text-purple-400 text-start px-24">
              PS: &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.&quot;✌️
              <br></br>
              <br></br>
              Since you like to lorem ipsum, I&apos;ve got a{" "}
              <a
                href="https://www.w3.org/Provider/Style/dummy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                lorem recommendation
              </a>{" "}
              for you
            </h1>
          </ParallaxLayer>
        </Parallax>
        <footer className="absolute inset-x-0 bottom-0 text-center text-gray-300 text-sm">
          Made with ♥ by Your Secret Santa
        </footer>
      </div>
      <div className="xl:hidden">
        <h1 className="text-2xl lg:text-4xl font-bold text-purple-400 text-start pt-4 px-24">
          Sorry, for better view this site is built for wider screen only.
          Please open it in a desktop/laptop browser.
        </h1>
        <footer className="absolute inset-x-0 bottom-0 text-center text-gray-300 text-sm">
          Made with ♥ by Your Secret Santa
        </footer>
      </div>
    </>
  );
}
