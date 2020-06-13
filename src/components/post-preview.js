import React from "react";
import { Link } from "gatsby";

// other imports
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Article = styled.article`
  display: flex;
  border-bottom: 1px solid black;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    border-bottom: 3px solid black;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    margin-right: 1em;
    border: 1px solid black;

    &:last-of-type {
      margin-right: 0;
      border-bottom: 1px solid black;
    }
  }
`;

const PostPreview = ({}) => {
  return (
    <Article>
      <div
        css={css`
          width: 10em;

          @media (min-width: 1440px) {
            height: 10em;
            width: 100%;
            background-color: #fff;
          }
        `}
      >
        img
      </div>
      <div>
        <h4>Caron Butler</h4>
        <h3>This is a WE Thing</h3>
      </div>
    </Article>
  );
};

export default PostPreview;
