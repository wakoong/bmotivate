// react imports
import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
// my imports
import Layout from "../components/Layout";
import { usePost } from "../hooks";
// other imports
import styled from "@emotion/styled";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 20em auto;
  grid-template-columns: 1fr;
  height: 100%;
`;

const ImageWrapper = styled.div``;

const PostWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 1em;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const Post = ({ data }) => {
  const { body } = data.mdx;
  const { title, author } = data.mdx.frontmatter;
  return (
    <Layout>
      <Container>
        <div>img</div>
        <PostWrapper>
          <h1>{title}</h1>
          <h3>Posted by {author}</h3>
          <MDXRenderer>{body}</MDXRenderer>
        </PostWrapper>
      </Container>
    </Layout>
  );
};

export default Post;
