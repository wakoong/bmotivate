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
            color: ${theme.black};

            @media (min-width: 768px) {
              font-size: 24px;
            }
          }

          #___gatsby,
          #gatsby-focus-wrapper {
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
