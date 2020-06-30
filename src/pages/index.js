// react imports
import React from "react";
import { Link } from "gatsby";
// my imports
import { BlockQuote, Hero, PreviewCard } from "../components";
import { Layout } from "../styles";
import usePost from "../hooks/usePost";
// other imports
import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 70vh auto;
  grid-gap: 0.5em;
  margin-top: 3.75em;
  padding-bottom: 4em;

  @media (min-width: 768px) {
    max-width: 1440px;
    margin: 3.75em auto 0 auto;
  }
`;

const Section = styled.section`
  text-align: ${(props) => props.textAlign};

  h1 {
    padding: 2em 0 1em 0;
    font-weight: 900;
  }

  .label {
    padding-bottom: 0.2em;
  }
  .label:hover {
    border-bottom: 3px solid black;
    cursor: pointer;
  }

  .arrow-link {
    position: absolute;
    top: -2em;
    right: 1em;
    font-weight: 700;
  }

  .arrow {
    position: absolute;
  }
`;

const PostsPreviewContainer = styled.section`
  position: relative;
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

  @media (min-width: 1440px) {
    padding: 0;
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
        <Section textAlign="center" padding="4em 0">
          <div>
            <h1>LATEST STORIES</h1>
          </div>

          <PostsPreviewContainer>
            <div className="arrow-link">
              <Link to="/stories">
                <span className="label">More Stories</span>
              </Link>
            </div>
            {post.slice(0, 8).map((p) => (
              <PreviewCard key={p.slug} post={p} />
            ))}
          </PostsPreviewContainer>
        </Section>
      </MainContainer>
    </Layout>
  );
};
