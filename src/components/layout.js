import React from "react";
import { Global, css } from "@emotion/core";
import Header from "./header";

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        html,
        body {
          margin: 0;
          color: #555;
          font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          font-size: 18px;
          line-height: 1.4;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        p {
          margin-top: 0;
          color: #222;
          line-height: 1.1;
        }
      `}
    />
    <Header />
    <main
      css={css`
        margin: 5em auto 4em;
        max-width: 1440px;
        width: 100%;
        border: 1px solid black;
        padding: 1em;
        @media (min-width: 1440px) {
          width: 1440px;
        }
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
