import React from "react";
import { PageData } from "../../models/PageData";

import "./Hero.css";

interface Props {
  heroProps: PageData;
}

export const Hero = ({ heroProps }: Props) => {
  const { heroP, heroH } = heroProps;
  return (
    <>
      <div className="hero-container" id="home">
        <img
          className="img-container"
          src={
            "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          alt="img-container"
        />
        <p>{heroP}</p>
        <h1>{heroH}</h1>
        <div className="hero-btns">
          <i className="fas fa-at"></i>
          <i className="fab fa-github"></i>
          <i className="fas fa-file-signature"></i>
        </div>
      </div>
    </>
  );
};
