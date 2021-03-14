import React from "react";
import styled from "styled-components";

export default function LoadingScreen() {
  return (
    <LoadingContainer>
      <Loader>
        <LoadingInner />
      </Loader>
      <Loader>
        <LoadingInner />
      </Loader>
      <Loader>
        <LoadingInner />
      </Loader>
      <Loader>
        <LoadingInner />
      </Loader>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  position: absolute;
  text-align: center;
  z-index: 100;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242f3f;
  height: 100%;
  width: 100%;

  ::before {
    content: "Zapraszam 🖱 ";
    position: absolute;
    color: #fff;
    font-size: 2rem;
    top: 40%;

  }
`;
const Loader = styled.div`
  width: 4vh;
  height: 4vh;
  position: relative;
  border: 2px solid #fff;
  animation: loader 2s infinite ease;
  margin: 0.5vw;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingInner = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;

  @keyframes loader-inner {
    0% {
      height: 0%;
    }
    25% {
      height: 0%;
    }

    50% {
      height: 100%;
    }

    75% {
      height: 100%;
    }

    100% {
      height: 0%;
    }
  }
`;
