import React from "react";
import videoBG from "../assets/17_009_04.mp4";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="main">
      <video src={videoBG} autoPlay loop muted />
      <Navbar />
      <div className="title">
        <div className="header">Ink Mimic!</div>
        <div class="delay-1500">
              Bringing light on the dark corners of your Literary Lustre.
        </div>
      </div>
    </div>
  );
};

export default Home;
