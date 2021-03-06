// React imports
import React from "react";
import { Link } from "gatsby";
// Other imports
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 4em;
  position: absolute;
  background: black;
  color: white;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: 50vw;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  color: white;
  height: 100vh;
  width: 100%;
  padding: 4em;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2em 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }

  h3 {
    letter-spacing: 0.05em;
  }
`;

const Block = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: ${(props) => (props.border ? "1px solid white" : "")};
  text-align: ${(props) => (props.align ? props.align : "start")};
`;

const Menu = ({ open, toggleMenu }) => {
  const isHidden = open ? true : false;
  console.log({ open, isHidden });
  return (
    <Container open={open} aria-hidden={!isHidden}>
      <MenuContainer>
        <Block border>
          <Link to="/about" onClick={() => toggleMenu(!open)}>
            <div>About</div>
          </Link>
          <Link to="/stories" onClick={() => toggleMenu(!open)}>
            <div>Stories</div>
          </Link>
        </Block>
        <Block align="end">
          <h3>B MOTIVATE</h3>
        </Block>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
