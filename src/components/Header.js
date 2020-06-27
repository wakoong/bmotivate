// React imports
import React, { useState } from "react";
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
  color: black;
  z-index: 1000;
  padding: 0 1em;

  @media (max-width: 768px) {
    h1 {
      font-size: 0.9em;
    }
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  align-items: ${(props) => (props.ai ? props.ai : "center")};

  span {
    margin-right: 1.5em;
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
