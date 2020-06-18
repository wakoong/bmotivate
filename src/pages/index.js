// react imports
import React from "react";
import { graphql, Link } from "gatsby";
// my imports
import { Layout, PreviewCard } from "../components";
import MainPhoto from "../../images/jeremy-lin.jpg";
// other imports
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr 8fr;
  height: calc(100% + 10rem);
`;

const MainCardPreview = styled.div`
  > img {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
`;

const QuoteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: black;
  padding: 3em;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
  background: #eee;
  padding: 1rem;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  border: 1px solid black;
`;

export default () => {
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
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
        </CardWrapper>
      </Container>
    </Layout>
  );
};
