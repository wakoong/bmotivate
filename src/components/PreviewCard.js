import React from "react";
import { Link } from "gatsby";

import Image from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10em 1fr;
  filter: grayscale(1);
  text-align: center;
  cursor: pointer;
  overflow: hidden;
`;

const Description = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  .date {
    font-size: 1rem;
    font-weight: 400;
    color: grey;
  }

  .title {
    font-weight: 700;
  }
`;

const PreviewCard = ({ post }) => {
  const { title, date, slug } = post;
  const dateRegex = /T.*/g;
  return (
    <Container to={`/${slug}`}>
      <Image
        css={css`
          * {
            margin-top: 0;
          }
        `}
        fluid={post.images.sharp.fluid}
        alt={post.title}
      />
      <Description>
        <div className="description"></div>
        <div className="date">{date.replace(dateRegex, "")}</div>
        <div className="title">{title}</div>
      </Description>
    </Container>
  );
};

export default PreviewCard;
