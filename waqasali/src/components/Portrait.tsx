import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      portraitImage: file(relativePath: { eq: "waqas-ali.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div style={{ width: 100 }}>
      <Img fluid={data.portraitImage.childImageSharp.fluid} />
    </div>
  );
};
