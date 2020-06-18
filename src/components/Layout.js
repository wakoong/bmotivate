// react imports
import React from "react";
// my imports
import { Header, Footer } from "../components";
// other imports
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body,
          #___gatsby,
          #gatsby-focus-wrapper {
            position: relative;
            min-height: 100vh;
          }

          div[role="group"][tabindex] {
            height: 100%;
          }

          main {
            padding-bottom: 3em;
            min-height: calc(100vh - 5em);
            height: auto;
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
