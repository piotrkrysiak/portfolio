import React, { ReactChild } from "react";
import styled from "styled-components";
import Items from "../app/components/Items";
import ItemsOthers from "../app/components/ItemsOthers";
import ItemsOthers2 from "../app/components/ItemsOthers2";
import ItemsOthers3 from "../app/components/ItemsOthers3";
interface IHeadingStyled {
  primary: boolean;
}


export default function Skills2() {
  return (
    <>
      <SkillsContainer primary={true}>
        <TitleContainer>
          <h1>Planuje poznać: </h1>
        </TitleContainer>
        <ItemsOthers2 />
        <TitleContainer>
          <h1>Konfiguracja: </h1>
        </TitleContainer>
        <ItemsOthers3 />
      </SkillsContainer>
    </>
  );
}

const SkillsContainer = styled("div")<IHeadingStyled>`
  background-color: ${({ primary }: IHeadingStyled) =>
    primary ? "white" : "black"};
  color: ${({ primary }: IHeadingStyled) => (primary ? "blac" : "white")};
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
