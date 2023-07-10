import React from "react";
import imageHome from "../../assets/img/imageHome1.png";

const Banner = () => {
  return (
      <section className="image">
        <img src={imageHome} alt="Falaise au bord de la mer" />
        <h1 className="bannerHome">
          <span>Chez vous,</span>
          <span> partout et ailleurs</span>
        </h1>
      </section>
  );
};

export default Banner;
