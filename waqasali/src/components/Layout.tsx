import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Header } from "./";

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
    <div>
      <Header siteTitle={title} />
      <main>{children}</main>
      <footer>
        Last Updated: {lastUpdated} | © {new Date().getFullYear()}
      </footer>
    </div>
  );
};
