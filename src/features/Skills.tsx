import React from "react";
import styled from "styled-components";
import ItemsOthers from "../app/components/Items";
import arrow from "../app/assets/white-arrow.svg";
import {
  itemsData,
  itemsDataConfig,
  itemsDataOthers,
  itemsDataToLearn,
  title,
  titleConfig,
  titleOthers,
  titleToLearn,
} from "../app/data/data";
import { Link } from "react-scroll";

interface IHeadingStyled {
  primary: boolean;
}

export default function Skills() {
  return (
    <>
      <SkillsContainer primary={false} id="skills">
        <div data-aos="fade-up" data-aos-duration="2000">
          <ItemsOthers title={title} skills={itemsData} />
          <ItemsOthers title={titleOthers} skills={itemsDataOthers} />
          <Link to="skillsTwo">
            <div className="imgcon">
              <img className="hero__arrow" src={arrow} alt="arrow" />
            </div>
          </Link>
        </div>
      </SkillsContainer>
      <SkillsContainer primary id="skillsTwo">
        <div data-aos="fade-up" data-aos-duration="2000">
          <ItemsOthers title={titleToLearn} skills={itemsDataToLearn} />
          <ItemsOthers title={titleConfig} skills={itemsDataConfig} />
        </div>
      </SkillsContainer>
    </>
  );
}

const SkillsContainer = styled("div")<IHeadingStyled>`
  background-color: ${({ primary }: IHeadingStyled) =>
    primary ? "#cdaaae" : "#0e0a1b"};
  color: ${({ primary }: IHeadingStyled) => (primary ? "#0e0a1b" : "#cdaaae")};
  object-fit: cover;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  padding: 10vh 15vw 0;
  display: flex;
  flex-direction: column;

  .imgcon {
    display: flex;
    bottom: 100px;
    justify-content: center;
    animation: indicator 1s infinite;

    @keyframes indicator {
      50% {
        transform: translate(0, 30px);
      }
    }

    > img {
      width: 20px;
      color: #cdaaae;
      margin: 20px;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    
  }

  @media screen and (max-width: 576px) {
    height: ${({ primary }: IHeadingStyled) =>
      primary ? "calc(var(--vh, 1vh) * 150)" : "calc(var(--vh, 1vh) * 200)"};
  }
  @media screen and (max-height: 900px) and (min-width: 960px) {
    height: ${({ primary }: IHeadingStyled) =>
      primary ? "calc(var(--vh, 1vh) * 200)" : "calc(var(--vh, 1vh) * 250)"};
  }

  @media screen and (max-height: 500px) {
    height: ${({ primary }: IHeadingStyled) =>
      primary ? "calc(var(--vh, 1vh) * 300)" : "calc(var(--vh, 1vh) * 400)"};
  }
`;
