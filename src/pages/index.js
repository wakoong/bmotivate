// react imports
import React from "react";
import { Link } from "gatsby";
// my imports
import Layout from "../components/layout";
import MainPostPreview from "../components/main-post-preview";
import PostPreview from "../components/post-preview";
import Hero from "../components/hero";
import usePosts from "../hooks/usePosts";
// other imports
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  background: #eee;
`;

const MainArticlesContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  @media (min-width: 1440px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;

const LatestArticlesContainer = styled.div`
  display: grid;
  grid-template-rows: 4em 1fr;
  grid-template-columns: 1fr;
  margin: 0 1.25em;
`;

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: calc(100% - 2.5em);
  height: calc(100% - 4em);
  border: 1px solid black;
  margin: 0 1.25em;

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

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

  return (
    <>
      {/* <Hero /> */}
      <Layout>
        <HomeContainer>
          <MainArticlesContainer>
            {posts.map((post) => (
              <MainPostPreview key={post.slug} post={post} />
            ))}
          </MainArticlesContainer>
          <LatestArticlesContainer>
            <div
              css={css`
                font-size: 0.75rem;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                padding: 0.75em 0 1.5em 0;
                margin: 0 1.25em;
              `}
            >
              <h3>LATEST STORIES</h3>
              <h4>Read more</h4>
            </div>
            <ArticlesWrapper>
              <PostPreview />
              <PostPreview />
              <PostPreview />
            </ArticlesWrapper>
          </LatestArticlesContainer>
        </HomeContainer>
      </Layout>
    </>
  );
};
