// react imports
import React from "react";
import { graphql, StaticQuery } from "gatsby";
// my imports
import { BlockQuote, Hero, PreviewCard } from "../components";
import { Layout } from "../styles";
// import MainPhoto from "../../images/jeremy-lin.jpg";
import usePost from "../hooks/usePost";
// other imports
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 50vh 40vh auto;
  grid-gap: 1em;
  margin-top: 3.75em;

  @media (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const Section = styled.section``;

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
        <Section>
          <Hero />
        </Section>
        <Section>
          <BlockQuote />
        </Section>
        <PostsPreviewContainer>
          {post.map((p) => (
            <PreviewCard key={p.slug} post={p} />
          ))}
        </PostsPreviewContainer>
      </MainContainer>
    </Layout>
  );
};
