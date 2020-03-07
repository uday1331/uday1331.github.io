/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          lastUpdated
        }
      }
    }
  `)
  const { title, lastUpdated } = data.site.siteMetadata

  return (
    <div className="flex flex-col min-h-screen">
      <Header siteTitle={title} />
      <main class="container mx-auto px-2 flex-grow">{children}</main>
      <footer class="text-center mb-px-2 text-xs text-gray-600">
        Last Updated: {lastUpdated} | © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
