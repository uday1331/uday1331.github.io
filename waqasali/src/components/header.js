import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { Portrait } from "./Portrait"

const Header = ({ siteTitle }) => {
  const navigationBar = [
    { title: "Resume", path: "/resume" },
    { title: "Achievements", path: "/achievements" },
    { title: "Projects", path: "/projects" },
  ]
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <Link to="/" className="flex items-center flex-shrink-0 mr-6">
        <Portrait />
        <span className="font-semibold text-xl tracking-tight hover:text-purple-600">
          {siteTitle}
        </span>
      </Link>

      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded hover:text-purple-600 hover:border-purple-400"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {navigationBar.map(({ title, path }) => (
            <Link
              key={path}
              to={path}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-purple-600 mr-4"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
