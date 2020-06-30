// React imports
import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
// Other imports
import styled from "@emotion/styled";

const ImageBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: left;
  background-size: cover;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  height: 100%;
  padding: 1em;
  letter-spacing: 0.2em;

  p {
    color: white;
    margin-top: 0;
  }

  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    line-height: 2;
  }
`;

const Quote = styled.blockquote`
  position: relative;
  font-size: 0.7rem;
  line-height: 2;
  margin: 0;
  padding: 1em;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  :before,
  :after {
    position: absolute;
    font-size: 2em;
    width: 1rem;
    height: 1rem;
    color: black;
  }
  :before {
    content: "“";
    left: -0.5em;
    top: 0;
  }

  :after {
    content: "”";
    right: -0.5em;
    bottom: 0.5em;
  }
`;

const Cite = styled.cite`
  line-height: 3;
  text-align: left;
`;

const BlockQuote = ({ quote, cite }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "quote-image.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const { fluid } = data.image.sharp;
  console.log({ fluid });
  return (
    // <ImageBackground Tag="section" fluid={fluid} fadeIn="soft">
    <TextBox>
      <Quote>
        Everything can be taken from a man/woman but one thing: the last of the
        human freedoms - to choose one's attitude in any given set of
        circumstances, to choose one's own way
      </Quote>
      <Cite>Victor E. Frankl</Cite>
    </TextBox>
    // </ImageBackground>
  );
};

export default BlockQuote;
