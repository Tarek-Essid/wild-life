import React from "react";
import "./Home.css";
import background from "../assets/background.png";

const Home = () => {
  return (
    <div
      className="my-image"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <p className="my-p">let's Make S'more Memories</p>
      <h1 className="my-h1">
        CAMP IS MORE THAN JUST A WORD, IT'S AN EXPERIENCE
      </h1>
    </div>
  );
};

export default Home;
