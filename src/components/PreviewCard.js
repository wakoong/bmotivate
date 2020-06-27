import React from "react";
import { Link } from "gatsby";

import Image from "gatsby-image";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Container = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10em 1fr;
  text-align: start;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }

  .description {
    display: flex;
    flex-direction: column;

    padding: 1em;

    .date {
      font-size: 1rem;
      font-weight: 400;
      color: grey;
    }

    .title {
      font-weight: 700;
    }
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
      <div className="description">
        <div className="date">{date.replace(dateRegex, "")}</div>
        <div className="title">{title}</div>
      </div>
    </Container>
  );
};

export default PreviewCard;
