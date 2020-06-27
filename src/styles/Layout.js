// react imports
import React from "react";
// my imports
import { Header, Footer } from "../components";
// other imports
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

const theme = {
  black: "#393939",
};

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: "Neue Montreal";
            src: url("../static/NeueMontreal-Regular.otf");
            font-weight: normal;
            font-style: normal;
          }

          html {
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            padding: 0;
            margin: 0;
            line-height: 1.6;
            font-size: 16px;
            color: ${theme.black};
            font-family: "Neue Montreal";

            @media (min-width: 768px) {
              font-size: 18px;
            }

            @media (min-width: 1200px) {
              font-size: 21px;
            }
          }

          #___gatsby,
          #gatsby-focus-wrapper {
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          p {
            margin-top: 0;
          }

          h1,
          h2,
          h3 {
            margin-bottom: 0;
          }

          a {
            text-decoration: none;
            color: ${theme.black};
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
