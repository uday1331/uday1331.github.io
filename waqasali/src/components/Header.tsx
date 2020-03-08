import React from "react";

import { Portrait } from "./";
import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/core";
import { InternalLink } from "./InternalLink";
import { customTheme } from "../gatsby-plugin-chakra-ui/theme";

export const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigationBar: { title: string; path: string }[] = [
    { title: "Home", path: "/" },
    { title: "Resume", path: "/resume" },
    { title: "Awards", path: "/awards" },
    { title: "Projects", path: "/projects" }
  ];

  return (
    <Flex as="nav" align="center" direction="column">
      <InternalLink to="/">
        <Flex alignItems="center" direction="column">
          <Flex as={Portrait} />
          <Flex as={Heading} justifyContent="center">
            {siteTitle}
          </Flex>
        </Flex>
      </InternalLink>
      <Flex align="center" justify="center" wrap="wrap">
        {navigationBar.map(({ title, path }) => (
          <Flex marginRight={2} key={path}>
            <InternalLink
              to={path}
              color={
                `/${window.location.pathname.split("/")?.[1]}` === path
                  ? colorMode === "dark"
                    ? customTheme.colors.primary[300]
                    : customTheme.colors.primary[500]
                  : undefined
              }
            >
              {title}
            </InternalLink>
          </Flex>
        ))}
        <IconButton
          aria-label="Dark Mode"
          size="xs"
          icon={colorMode === "dark" ? "sun" : "moon"}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};
