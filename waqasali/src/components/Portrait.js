import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      portraitImage: file(relativePath: { eq: "waqas-ali.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="fill-current mr-2">
      <Img
        fluid={data.portraitImage.childImageSharp.fluid}
        className="rounded-full w-16"
      />
    </div>
  )
}
