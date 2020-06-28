// React imports
import React from "react";
// Other imports
import styled from "@emotion/styled";

const Quote = styled.blockquote`
  font-weight: 900;
  font-size: 1rem;
  max-width: 600px;
  line-height: 1.4;
  position: relative;
  margin: 0;
  padding: 1em;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  :before,
  :after {
    position: absolute;
    color: white;
    font-size: 2em;
    width: 1rem;
    height: 1rem;
  }
  :before {
    content: "“";
    left: 0;
    top: -1.5rem;
  }

  :after {
    content: "”";
    right: 0;
    bottom: -0rem;
  }
`;

const Cite = styled.cite`
  line-height: 3;
  text-align: left;
`;

const BlockQuote = ({ quote, cite }) => {
  return (
    <>
      <Quote>{quote}</Quote>
      <Cite>{cite}</Cite>
    </>
  );
};

export default BlockQuote;
