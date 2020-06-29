// react imports
import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
// my imports
import { Layout } from "../styles";
import { usePost } from "../hooks";
// other imports
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Image from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
        images {
          sharp: childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
  max-width: 680px;
  margin: 3.75em auto 0 auto;
`;

const ImageWrapper = styled.div``;

const PostWrapper = styled.div`
  min-height: calc(100vh - 25em);
  width: 100%;
  padding: 2em;
  font-size: 1rem;

  header {
    text-align: start;

    .title,
    .sub-title {
      margin-bottom: 0;
    }

    .title {
      font-weight: 400;
    }

    .sub-title {
      font-size: 1.1em;
      color: rgba(117, 117, 117, 1);
    }

    .date {
      font-size: 1em;
    }
  }

  div {
    text-align: justify;
  }

  @media (min-width: 768px) {
    padding: 4em 0;
    font-size: 1.2rem;
  }
`;

const Post = ({ data }) => {
  const { body } = data.mdx;
  const { title, date, images } = data.mdx.frontmatter;
  const dateRegex = /T.*/g;

  return (
    <Layout>
      <Container>
        <Image
          css={css`
            * {
              margin-top: 0;
            }
          `}
          fluid={images.sharp.fluid}
          alt={title}
        />
        <PostWrapper>
          <header>
            <h1 className="title">{title}</h1>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, vim facer saperet ei, veritus
            </p>
            <p className="date">Posted by {date.replace(dateRegex, "")}</p>
          </header>
          <div>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </PostWrapper>
      </Container>
    </Layout>
  );
};

export default Post;
