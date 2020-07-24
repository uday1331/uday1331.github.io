import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Avatar } from "@chakra-ui/core";

export const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      portraitImage: file(relativePath: { eq: "uday-jain.jpg" }) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
      siteTitleQuery: site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Avatar
      size="lg"
      src={data.portraitImage.childImageSharp.fixed.src}
      name={data.siteTitleQuery.siteMetadata.title}
    />
  );
};
