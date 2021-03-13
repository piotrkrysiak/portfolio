import React from "react";
import styled from "styled-components";

import vscLogo from "./../assets/skills/vsc.svg";
import prittierLogo from "./../assets/skills/prettier.svg";
import responsiveLogo from "./../assets/skills/responsive.svg";

export default function ItemsOthers2() {
  return (
    <ItemsContainer>
      <Item>
        <img src={vscLogo} alt="html5" />
        <p>VSC</p>
      </Item>
      <Item>
        <img src={prittierLogo} alt="html5" />
        <p>Czystość kodu</p>
      </Item>
      <Item>
        <img src={responsiveLogo} alt="html5" />
        <p>Responsywność</p>
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
