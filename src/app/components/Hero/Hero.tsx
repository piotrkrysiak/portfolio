import React from "react";
import { PageData } from "../../models/PageData";
import back from "./../../assets/back.jpg";
import "./Hero.css";

interface Props {
  heroProps: PageData;
}

export const Hero = ({ heroProps }: Props) => {
  const { heroP, heroH } = heroProps;
  return (
    <>
      <div className="hero-container" id="home">
        <img className="img-container" src={back} alt="img-container" />
        <p>{heroP}</p>
        <h1>{heroH}</h1>
        <div className="hero-btns">
          <a href="mailto:krysiakpiotr14@gmail.com" target="blank">
            <i className="fas fa-at"></i>
          </a>
          <a href="https://github.com/plotrekpl" target="blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="cv.com" target="blank">
            <i className="fas fa-file-signature"></i>
          </a>
        </div>
      </div>
    </>
  );
};
