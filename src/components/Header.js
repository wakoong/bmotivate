// react imports
import React from "react";
import { Link } from "gatsby";

// other imports
import styled from "@emotion/styled";

const Container = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  background: transparent;
`;

const Header = () => {
  return (
    <Container>
      <div>menu</div>

      <Link to="/">
        {" "}
        <h1>B MOTIVATE </h1>
      </Link>

      <div>search</div>
    </Container>
  );
};

export default Header;
