// This renderer mapping has been obtained from the link below.
// It was originally written in JavaScript and I added types to
// make it properly work with TypeScript.
//
// Reference: https://github.com/mustaphaturhan/chakra-ui-markdown-renderer
// Original Author: Mustafa Turhan (odunluzikkim@gmail.com)

import React from "react";
import {
  Text,
  Code,
  Divider,
  Link,
  List,
  Checkbox,
  ListItem,
  Heading,
  Image
} from "@chakra-ui/core";

interface Props {
  children: React.ReactNode;
}

export const ChakraUIRenderer = () => {
  const getCoreProps = (props: any): any => {
    return props["data-sourcepos"]
      ? { "data-sourcepos": props["data-sourcepos"] }
      : {};
  };

  return {
    paragraph: (props: Props) => {
      const { children } = props;
      return <Text mb={2}>{children}</Text>;
    },
    emphasis: (props: Props) => {
      const { children } = props;
      return <Text as="em">{children}</Text>;
    },
    blockquote: (props: Props) => {
      const { children } = props;
      return <Code p={2}>{children}</Code>;
    },
    code: (props: { language?: string; value: string }) => {
      const { language, value } = props;
      return (
        <pre {...getCoreProps(props)}>
          <Code p={2} className={language && `language-${language}`}>
            {value}
          </Code>
        </pre>
      );
    },
    delete: (props: Props) => {
      const { children } = props;
      return <Text as="del">{children}</Text>;
    },
    thematicBreak: Divider,
    link: Link,
    img: (props: any) => {
      console.log(props);
      return <Image src={props.fluid.src} />;
    },
    linkReference: Link,
    imageReference: (props: any) => {
      console.log(props);
      return <Image src={props.fluid.src} />;
    },
    text: (props: Props) => {
      const { children } = props;
      return <Text as="span">{children}</Text>;
    },
    list: (props: {
      start: number;
      ordered: boolean;
      children: React.ReactNode;
      depth: number;
    }) => {
      const { start, ordered, children, depth } = props;
      const attrs = getCoreProps(props);
      if (start !== null && start !== 1 && start !== undefined) {
        attrs.start = start.toString();
      }
      let styleType = "disc";
      if (ordered) styleType = "decimal";
      if (depth === 1) styleType = "circle";
      return (
        <List
          spacing={24}
          as={ordered ? "ol" : "ul"}
          styleType={styleType}
          pl={4}
          {...attrs}
        >
          {children}
        </List>
      );
    },
    listItem: (props: { children: React.ReactNode; checked: boolean }) => {
      const { children, checked } = props;
      let checkbox = null;
      if (checked !== null && checked !== undefined) {
        checkbox = (
          <Checkbox isChecked={checked} isReadOnly>
            {children}
          </Checkbox>
        );
      }
      return (
        <ListItem
          {...getCoreProps(props)}
          listStyleType={checked !== null ? "none" : "inherit"}
        >
          {checkbox || children}
        </ListItem>
      );
    },
    definition: () => null,
    heading: (props: { children: React.ReactNode; level: number }) => {
      const { level, children } = props;
      const sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
      return (
        <Heading
          my={4}
          as={`h${level}`}
          size={sizes[level - 1]}
          {...getCoreProps(props)}
        >
          {children}
        </Heading>
      );
    },
    inlineCode: (props: Props) => {
      const { children } = props;
      return <Code {...getCoreProps(props)}>{children}</Code>;
    }
  };
};

export default ChakraUIRenderer;
