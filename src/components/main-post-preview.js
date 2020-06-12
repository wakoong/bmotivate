import React from "react";
import { css } from "@emotion/core";

import styled from "@emotion/styled";
import { Link } from "gatsby";

const MainArticle = styled.article`
  height: 40rem;
  margin-bottom: 1em;
  border-bottom: 1px solid black;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media (min-width: 1440px) {
    &:first-of-type {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

const MainPostPreview = ({ post }) => {
  return (
    <MainArticle>
      <h3>{post.title}</h3>
    </MainArticle>
  );
};

export default MainPostPreview;
