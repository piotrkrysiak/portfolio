import React from "react";
import styled from "styled-components";

interface Props {
  image: string;
  description: string;
}

export default function Item({ image, description }: Props) {
  return (
    <ItemContainer>
      <img src={image} alt="img" />
      <p>{description}</p>
    </ItemContainer>
  );
}
const ItemContainer = styled.div`
  width: 98%;
  height: 200px;
  margin: 2%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in;
  :hover {
    transform: scale(1.5);
  }
  > img {
    width: 10vh;
    height: 10vh;
  }
  @media screen and (max-width: 960px) {
    height: 150px;
  }
`;
