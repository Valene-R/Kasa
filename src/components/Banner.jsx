import React from "react";
import imageHome from "../assets/img/imageHome1.png";

const Banner = () => {
  return (
    <div>
      <div className="image">
        <img src={imageHome} alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};

export default Banner;
