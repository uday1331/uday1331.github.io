import { Link } from "gatsby";
import React from "react";

import { Portrait } from "./";

export const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle
}) => {
  const navigationBar = [
    { title: "Resume", path: "/resume" },
    { title: "Achievements", path: "/achievements" },
    { title: "Projects", path: "/projects" }
  ];

  return (
    <nav>
      <Link to="/">
        <Portrait />
        <span>{siteTitle}</span>
      </Link>
      <div>
        {navigationBar.map(({ title, path }) => (
          <Link key={path} to={path}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};
