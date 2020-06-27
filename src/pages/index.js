// react imports
import React from "react";
import { graphql, Link } from "gatsby";
// my imports
import { PreviewCard } from "../components";
import { Layout } from "../styles";
import MainPhoto from "../../images/jeremy-lin.jpg";
import usePost from "../hooks/usePost";
// other imports
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 30em 10em auto;
`;

const HeadlinePreviewContainer = styled.div`
  padding-bottom: 1em;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`;

const PostsPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-gap: 1em;
  width: 100%;

  margin: 0 auto;
  padding: 1em;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    max-width: 1440px;
  }
`;

export default () => {
  const post = usePost();
  return (
    <Layout>
      <MainContainer>
        <HeadlinePreviewContainer>
          <img src={MainPhoto} alt="main photo" />
        </HeadlinePreviewContainer>
        <QuoteContainer>
          <p>
            <i>
              "Everything negative - pressure, challenges - is all an
              opportunity for me to rise."
            </i>
          </p>
          <br></br>
          <p> - Kobe Bryant</p>
        </QuoteContainer>
        <PostsPreviewContainer>
          {post.map((p) => (
            <PreviewCard key={p.slug} post={p} />
          ))}
        </PostsPreviewContainer>
      </MainContainer>
    </Layout>
  );
};
