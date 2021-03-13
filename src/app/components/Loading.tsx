import React from "react";
import styled from "styled-components";

export default function LoadingScreen() {
  return (
    <LoadingContainer>
        TODO:
      <div>Loading</div>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 2.5s
    forwards;
`;
