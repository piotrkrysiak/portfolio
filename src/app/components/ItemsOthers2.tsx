import React from "react";
import styled from "styled-components";

import reduxLogo from "./../assets/skills/redux.svg";
import graphqlLogo from "./../assets/skills/graphql.svg";
import gatsbyLogo from "./../assets/skills/gatsby.svg";

export default function ItemsOthers2() {
  return (
    <ItemsContainer>
      <Item>
        <img src={reduxLogo} alt="html5" />
        <p>Redux</p>
      </Item>
      <Item>
        <img src={gatsbyLogo} alt="html5" />
        <p>Gatsby</p>
      </Item>
      <Item>
        <img src={graphqlLogo} alt="html5" />
        <p>GraphqlCMS</p>
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
