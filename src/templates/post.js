import React from "react";

import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

//
export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  const { title, author } = post.frontmatter;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{`Posted by ${author}`} </p>
      <p>Post body goes here</p>

      <Link to="/">Home</Link>
    </Layout>
  );
};

export default PostTemplate;
