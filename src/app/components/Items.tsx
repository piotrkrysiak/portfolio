import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { Skill } from "../models/Skill";

interface Props {
  title: string;
  skills: Skill[];
}

export default function Items({ title, skills }: Props) {
  return (
    <>
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
      <ItemsContainer>
        {skills.map(({ id, image, description }: Skill) => (
          <Item key={id} image={image} description={description}></Item>
        ))}
      </ItemsContainer>
    </>
  );
}
const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TitleContainer = styled.div``;
