import React from "react";
import styled from "styled-components";
import ItemsOthers from "../app/components/Items";
import { itemsData, itemsDataConfig, itemsDataOthers, itemsDataToLearn, title, titleConfig, titleOthers, titleToLearn } from "../app/data/data";

interface IHeadingStyled {
  primary: boolean;
}

export default function Skills() {
  return (
    <>
      <SkillsContainer primary={false} id="skills">
        <ItemsOthers title={title} skills={itemsData} />
        <ItemsOthers title={titleOthers} skills={itemsDataOthers} />
      </SkillsContainer>
      <SkillsContainer primary>
        <ItemsOthers title={titleToLearn} skills={itemsDataToLearn} />
        <ItemsOthers title={titleConfig} skills={itemsDataConfig} />
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
    height: calc(var(--vh, 1vh) * 180);
  }
`;
