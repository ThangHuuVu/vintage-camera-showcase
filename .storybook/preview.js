import React from "react";
import { addDecorator } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";

addDecorator(storyFn => (
  <ChakraProvider resetCSS theme={theme}>
    {storyFn()}
  </ChakraProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
