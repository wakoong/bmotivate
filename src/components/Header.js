// React imports
import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
// My imports
import Burger from "./Burger";
import Menu from "./Menu";
// Other imports
import styled from "@emotion/styled";

const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.75em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background: white;
  z-index: 1000;
  font-weight: bold;
`;

const Block = styled.div`
  display: flex;
  color: white;
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  align-items: ${(props) => (props.ai ? props.ai : "center")};

  span {
    margin-right: 1.5em;
  }

  h1 {
    color: black;
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 0.9em;
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Block></Block>

      <Block>
        <Link to="/">
          <h1>B MOTIVATE </h1>
        </Link>
      </Block>

      <Block jc="flex-end">
        <Burger open={open} toggleMenu={setOpen} />
        <Menu open={open} toggleMenu={setOpen} />
      </Block>
    </Container>
  );
};

export default Header;
