import React from "react";
import styled from "styled-components";
import { PageData } from "../app/models/PageData";
import "aos/dist/aos.css";
import AOS from "aos";

interface Props {
  aboutProps: PageData;
}
interface NewlineProps {
  text: string;
}

function NewlineText({ text }: NewlineProps) {
  const newText = text
    .split("\n")
    .map((str: string, index) => <p key={index}>{str}</p>);
  return <>{newText}</>;
}

export default function About({ aboutProps }: Props) {
  AOS.init();
  const { aboutHreder, aboutDescription, aboutImg } = aboutProps;
  return (
    <AboutContainer id="about">
      <AboutLeft data-aos="fade-up" data-aos-duration="2000">
        <h1>{aboutHreder}</h1>
        <NewlineText text={aboutDescription} />
      </AboutLeft>
      <AboutRight data-aos="fade-down" data-aos-duration="2000">
        <img src={aboutImg} alt="my-img" />
      </AboutRight>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  object-fit: cover;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  color: #0e0a1b;
  background-color: #cdaaae;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
    flex-direction: column;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    font-weight: 300;
  }
  @media screen and (max-height: 500px) {
    height: calc(var(--vh, 1vh) * 300);
  }
  @media screen and (max-height: 900px) and (min-width: 960px) {
    height: calc(var(--vh, 1vh) * 150);
    font-size: 1.5rem;
  }
`;

const AboutLeft = styled.div`
  justify-content: center;
  padding: 4rem;
  flex: 0.5;
  :hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    mask-size: 200%;
    animation: shine 2s infinite;
  }

  @-webkit-keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }
  @keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }

  @media screen and (max-width: 960px) {
    padding: 5rem 2rem 0rem;
    flex: 0.4;
  }
`;

const AboutRight = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;
  flex: 0.5;

  > img {
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    padding: 5px;
    border: 5px solid #000;
    animation: spin 5s alternate infinite;
    :hover {
      border: none;
    }
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
    padding: 0;
    margin-bottom: 3rem;
    flex: 0.6;
    > img {
      width: 50vw;
      height: 50vw;
    }
    @media screen and (max-width: 576px) {
      > img {
        width: 60vw;
        height: 60vw;
        border-radius: 50%;
        padding: 3px;
        border: 2px solid #0e0a1b;
      }
    }
  }
`;
