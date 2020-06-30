// React imports
import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
// My imports
import usePost from "../hooks/usePost";
// Other imports
import styled from "@emotion/styled";

/* CSS referred from https://github.com/jlengstorf/frontendmasters-gatsby/blob/step5/hero-image/src/components/hero.js */
const ImageBackground = styled(BackgroundImage)`
  filter: grayscale(100%);
  background-position: top;
  background-size: cover;
  height: 100%;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), 80%, rgba(0, 0, 0, 0.8));
  color: white;
  height: 100%;
  padding: 1em;
  width: 100%;

  h1 {
    font-size: 2.25rem;
    padding-bottom: 0.3em;
  }
  p,
  a {
    color: white;
    letter-spacing: 0.04em;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const post = usePost();
  const { title, slug, author, images } = post[0];
  const { fluid } = images.sharp;
  return (
    <Link to={`/${slug}`}>
      <ImageBackground Tag="section" fluid={fluid} fadeIn="soft">
        <TextBox>
          <h1>{title}</h1>
          <p>The journey begins</p>
        </TextBox>
      </ImageBackground>
    </Link>
  );
};

export default Hero;
