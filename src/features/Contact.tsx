import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactContainer>
      <div data-aos="fade-right" data-aos-duration="2000">
        <RowContainer>
          <i className="fas fa-envelope"></i>
          <a href="mailto:krysiakpiot14@gmail.com">
            <h1>krysiakpiot14@gmail.com</h1>
          </a>
        </RowContainer>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000">
        <RowContainer>
          <i className="fas fa-phone"></i>
          <a href="tel:790720515">
            <h1>790720515</h1>
          </a>
        </RowContainer>
      </div>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  background-color: #0e0a1b;
  color: #fff;
  object-fit: cover;
  height: calc(var(--vh, 1vh) * 50);
  width: 100%;
  padding: 0 15vw 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > a {
    text-decoration: none;
    color: white;
  }
  > a:hover {
    opacity: 0.8;
  }
`;
const RowContainer = styled.div`
  :hover {
    opacity: 0.8;
  }
  display: flex;
  flex-direction: row;
  > a {
    text-decoration: none;
    color: #cdaaae;
  }
  .fa-phone,
  .fa-envelope {
    display: flex;
    align-items: center;
    font-size: 2rem;
    margin-right: 10px;
    color: #cdaaae;
  }
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
