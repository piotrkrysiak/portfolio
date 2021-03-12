import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import arrow from "./../assets/white-arrow.svg";

const Scroll = () => {
  return (
    <Link to="about">
      <ScrollContainer>
        <img className="hero__arrow" src={arrow} alt="arrow" />
      </ScrollContainer>
    </Link>
  );
};

export default Scroll;

const ScrollContainer = styled.div`
  .hero__arrow {
    width: 20px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 300px);
    transition: 0.3s linear;
    animation: scroll-indicator 1s infinite;
  }

  @keyframes scroll-indicator {
    50% {
      transform: translate(-50%, 310px);
    }
  }
  @media screen and (max-width: 906px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -80px);
  }
`;
