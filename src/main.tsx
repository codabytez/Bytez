import * as React from "react";
import { ChakraProvider, extendTheme, ThemeOverride } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";

const theme: ThemeOverride = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
