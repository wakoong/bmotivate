// React imports
import React from "react";
import { Link } from "gatsby";
// My imports
import { Button } from "../styles";
// Other imports
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 15em;
  width: 100%;
  padding: 1em;
  background: black;
  color: white;

  a {
    color: white;
  }

  @media (min-width: 768px) {
    height: 10em;
    flex-direction: row;
  }
`;

const LinkContainers = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1em;

  li {
    list-style: none;
  }

  span {
    font-weight: 400;
  }

  @media (min-width: 768px) {
    flex-direction: column;

    h2 {
      margin-bottom: 1em;
    }
  }
`;

const NewsLetterContainer = styled.div``;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  letter-spacing: 0.2em;
  margin-bottom: 3em;

  p {
    font-size: 0.5rem;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

const Footer = () => {
  return (
    <Container>
      <LinkContainers>
        <li>
          <Link to="/">
            <span>B MOTIVATE</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>ABOUT</span>
          </Link>
        </li>
        <li>
          <Link to="/stories">
            <span>STORIES</span>
          </Link>
        </li>
      </LinkContainers>
      {/* <NewsLetterContainer>
        <h2>NEWSLETTER</h2>
        <Button>Sign up</Button>
      </NewsLetterContainer> */}
      <SocialContainer>
        <p>COPYRIGHT © 2020,</p>
        <p>WK</p>
      </SocialContainer>
    </Container>
  );
};

export default Footer;
