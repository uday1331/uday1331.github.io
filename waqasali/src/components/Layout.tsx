import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex } from "@chakra-ui/core";

import { Header } from "./";
import { Footer } from "./Footer";

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
    <Flex
      direction="column"
      minHeight="100vh"
      maxWidth="29rem"
      marginX="auto"
      padding="2.625rem 1.3125rem"
    >
      <Header siteTitle={title} />
      <Flex as="main" direction="column" flex={1} marginY={4}>
        {children}
      </Flex>
      <Footer lastUpdated={lastUpdated} />
    </Flex>
  );
};
