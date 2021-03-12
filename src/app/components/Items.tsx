import React from "react";
import styled from "styled-components";

import html5Logo from "./../assets/skills/html5.svg";
import css3Logo from "./../assets/skills/css3.svg";
import jsLogo from "./../assets/skills/js.svg";
import gitLogo from "./../assets/skills/git.svg";
import reactLogo from "./../assets/skills/react.svg";
import styledLogo from "./../assets/skills/styled-components.svg";
import typescriptLogo from "./../assets/skills/typescript.svg";
import mobxLogo from "./../assets/skills/mobx.png";

export default function Items() {
  return (
    <ItemsContainer>
      <Item>
        <img src={html5Logo} alt="html5" />
        <p>HTML 5</p>
      </Item>
      <Item>
        <img src={css3Logo} alt="html5" />
        <p>CSS 3</p>
      </Item>
      <Item>
        <img src={jsLogo} alt="html5" />
        <p>JS</p>
      </Item>
      <Item>
        <img src={gitLogo} alt="html5" />
        <p>Git</p>
      </Item>
      <Item>
        <img src={typescriptLogo} alt="html5" />
        <p>TypeScript</p>
      </Item>
      <Item>
        <img src={reactLogo} alt="html5" />
        <p>React</p>
      </Item>
      <Item>
        <img src={styledLogo} alt="html5" />
        <p>Styled-components</p>
      </Item>
      <Item>
        <img src={mobxLogo} alt="html5" />
        <p>MobX</p>
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
  }
`;
