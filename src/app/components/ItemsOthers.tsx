import React from "react";
import styled from "styled-components";

import englishLogo from "./../assets/skills/english.svg";
import dotnetLogo from "./../assets/skills/dotnet.svg";
import sqlliteLogo from "./../assets/skills/sqlite.svg";

export default function ItemsOthers() {
  return (
    <ItemsContainer>
      <Item>
        <img src={englishLogo} alt="html5" />
        <p>B2</p>
      </Item>
      <Item>
        <img src={dotnetLogo} alt="html5" />
        <p>.Net</p>
      </Item>
      <Item>
        <img src={sqlliteLogo} alt="html5" />
        <p>sqlite</p>
      </Item>
    </ItemsContainer>
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
const Item = styled.div`
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
`;
