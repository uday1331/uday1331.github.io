import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const navigationBar = [
    { title: "Resume", path: "/resume" },
    { title: "Achievements", path: "/achievements" },
    { title: "Projects", path: "/projects" },
  ]
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </h1>
        <ul>
          {navigationBar.map(({ title, path }) => (
            <li>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
