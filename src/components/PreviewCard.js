import React from "react";
import { Link } from "gatsby";

import Image from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  border: 1px solid black;
  text-align: center;
  background: grey;
  min-height: 10em;

  > div:first-of-type {
    background: #e3e3e3;
    border-bottom: 1px solid black;
  }
`;

const PreviewCard = ({ post }) => {
  console.log({ post });
  return (
    <Container>
      <Image
        css={css`
          * {
            margin-top: 0;
          }
        `}
        fluid={post.images.sharp.fluid}
        alt={post.title}
      />
      <div>title</div>
    </Container>
  );
};

export default PreviewCard;
