import React from "react";
import styled from "styled-components";
import { PageData } from "../app/data/PageData";
import AOS from "aos";
import "aos/dist/aos.css";
import tlo from "./../app/assets/Background.svg";
interface Props {
  aboutProps: PageData;
}
export default function About({ aboutProps }: Props) {
  const { aboutHreder, aboutDescription, aboutImg } = aboutProps;
  AOS.init();
  return (
    <AboutContainer id="about">
      <AboutLeft data-aos="fade-up" data-aos-duration="2000">
        <h1>{aboutHreder}</h1>
        <p>{aboutDescription}</p>
      </AboutLeft>
      <AboutRight data-aos="fade-up" data-aos-duration="2000">
        <img src={aboutImg} alt="my-img" />
      </AboutRight>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  background: url(${tlo});
  object-fit: cover;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    flex-direction: column;
  }
`;

const AboutLeft = styled.div`
  justify-content: center;
  padding: 4rem;
  flex: 0.5;
  p > {
    white-space: pre-line;
  }
  @media screen and (max-width: 960px) {
    padding: 1rem;
  }
`;

const AboutRight = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;
  flex: 0.5;
  > img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    padding: 5px;
    border: 5px solid #000;
    animation: spin 5s alternate  infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(3deg);
    }
  }

  @media screen and (max-width: 960px) {
    > img {
      width: 90%;
      height: auto;
      border-radius: 50%;
      padding: 5px;
      border: 5px solid #000;
    }
  }
`;
