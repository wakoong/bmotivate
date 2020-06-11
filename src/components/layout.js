import React from "react";
import { Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import Header from "./header";
import useSiteMetaData from "../hooks/useSiteMetaData";

const Layout = ({ children }) => {
  const { title } = useSiteMetaData();

  return (
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
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
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
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content="site description" />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 5em auto 4em;
          max-width: 1440px;
          width: 100%;
          height: 100%;
          border: 1px solid black;
          @media (min-width: 1440px) {
            width: 1440px;
          }
        `}
      >
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
