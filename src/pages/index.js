// react imports
import React from "react";
import { graphql, Link } from "gatsby";
// my imports
import { Layout, PreviewCard } from "../components";
import MainPhoto from "../../images/jeremy-lin.jpg";
import usePost from "../hooks/usePost";
// other imports
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-rows: 30% 10em auto;
`;

const MainCardPreview = styled.div`
  padding-bottom: 1em;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const QuoteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1em;
  width: 100%;
  max-width: 90em;
  min-height: 500px;
  margin: 0 auto;
  padding: 1em;

  /* not sure why */
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`;

export default () => {
  const post = usePost();
  return (
    <Layout>
      <Container>
        <MainCardPreview>
          <img src={MainPhoto} alt="main photo" />
        </MainCardPreview>
        <QuoteBox>
          <p>
            <i>
              "Everything negative - pressure, challenges - is all an
              opportunity for me to rise."
            </i>
          </p>
          <br></br>
          <p> - Kobe Bryant</p>
        </QuoteBox>
        <CardWrapper>
          {post.map((p) => (
            <PreviewCard post={p} />
          ))}
        </CardWrapper>
      </Container>
    </Layout>
  );
};
