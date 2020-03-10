import React from "react";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./src/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {element}
    </ColorModeProvider>
  </ThemeProvider>
);
