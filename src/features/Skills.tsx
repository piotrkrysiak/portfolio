import React from "react";
import styled from "styled-components";
import Items from "../app/components/Items";
import ItemsOthers from "../app/components/ItemsOthers";

export default function Skills() {
  return (
    <>
      <SkillsContainer >
        <TitleContainer>
          <h1>Używam i uczę się: </h1>
        </TitleContainer>
        <Items />
        <TitleContainer>
          <h1>Inne: </h1>
        </TitleContainer>
        <ItemsOthers />
      </SkillsContainer>
    </>
  );
}

const SkillsContainer = styled.div`
  background-color: #000;
  color: white;
  object-fit: cover;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  padding: 10vh 15vw 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    height: calc(var(--vh, 1vh) * 250);
  }
`;

const TitleContainer = styled.div``;
