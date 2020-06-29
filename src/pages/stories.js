// react imports
import React from "react";
// my imports
import { Layout } from "../styles";
import { PreviewCard } from "../components";
import usePost from "../hooks/usePost";
// other imports
import styled from "@emotion/styled";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  padding: 0 1em;
  width: 100%;
  margin: 5em auto 3em auto;
  min-height: calc(100vh - 8em);
  max-width: 1440px;

  @media (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
    padding: 0 1em;
    margin: 7em auto 4em auto;
  }
`;

const Stories = () => {
  const post = usePost();
  return (
    <Layout>
      <Container>
        {post.map((p) => (
          <PreviewCard key={p.slug} post={p} />
        ))}
      </Container>
    </Layout>
  );
};

export default Stories;
