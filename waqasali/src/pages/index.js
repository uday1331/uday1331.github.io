import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I am Waqas</h1>
    <p>Software Engineer at Credit Suisse</p>
    <p>University of Hong Kong (Class of 2020)</p>
    <p>Lives In: Hong Kong</p>
    <p>From: Pakistan</p>
    <p>
      <a href="https://linkedin.com" className="hover:text-purple-600">
        LinkedIn
      </a>
    </p>
    <p>
      <a
        href="https://github.com/WaqasAliAbbasi"
        className="hover:text-purple-600"
      >
        GitHub
      </a>
    </p>
    <p>
      <a
        href="mailto:waqas.abbasi@outlook.com"
        className="hover:text-purple-600"
      >
        Email
      </a>
    </p>
  </Layout>
)

export default IndexPage
