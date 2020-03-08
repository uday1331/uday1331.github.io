import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  ThemeProvider,
  CSSReset,
  Flex,
  ColorModeProvider
} from "@chakra-ui/core";

import { Header } from "./";
import { Footer } from "./Footer";
import { customTheme } from "../gatsby-plugin-chakra-ui/theme";

export const Layout: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          lastUpdated
        }
      }
    }
  `);
  const { title, lastUpdated } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Flex padding={2} direction="column" minHeight="100vh">
          <Header siteTitle={title} />
          <Flex as="main" direction="column" flex={1} paddingY={2} wrap="wrap">
            {children}
          </Flex>
          <Footer lastUpdated={lastUpdated} />
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
