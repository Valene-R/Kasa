import React from "react";
import imageHome from "../../assets/img/imageHome1.png";

const Banner = () => {
  return (
    <div>
      <div className="image">
        <img src={imageHome} alt="Falaise au bord de la mer" />
        <h1>
          <span>Chez vous,</span>
          <span> partout et ailleurs</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
