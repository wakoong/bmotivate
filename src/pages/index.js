// react imports
import React from "react";
import { Link } from "gatsby";
// my imports
import Layout from "../components/layout";
import MainPostPreview from "../components/main-post-preview";
import usePosts from "../hooks/usePosts";
import JL from "../images/png/JL.jpg";
import SC from "../images/png/SC.jpg";
import SL from "../images/png/SL.jpg";
// other imports
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  background: #eee;

  @media (min-width: 1440px) {
    padding: 1em;
  }
`;

const MainArticlesContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  @media (min-width: 1440px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const LatestArticlesContainer = styled.div``;

const Header = styled.header`
  position: relative;
  font-size: 1em;
  padding: 1em 0;
  @media (min-width: 1440px) {
    font-size: 1.5em;
  }
`;

const Main = styled.main`
  width: 100%;
`;

export default () => {
  const posts = usePosts();
  console.log({ posts });
  return (
    <Layout>
      <HomeContainer>
        <MainArticlesContainer>
          {posts.map((post) => (
            <MainPostPreview key={post.slug} post={post} />
          ))}
        </MainArticlesContainer>
        <LatestArticlesContainer>1</LatestArticlesContainer>
      </HomeContainer>
    </Layout>
  );
};
