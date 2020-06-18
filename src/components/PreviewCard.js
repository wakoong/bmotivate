import React from "react";
import { Link } from "gatsby";

import styled from "@emotion/styled";

const Container = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  border: 1px solid black;
  text-align: center;
  background: grey;

  > div:first-of-type {
    background: #e3e3e3;
    border-bottom: 1px solid black;
  }
`;

const PreviewCard = () => {
  return (
    <Container>
      <div>Img</div>
      <div>title</div>
    </Container>
  );
};

export default PreviewCard;
