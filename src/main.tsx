import * as React from "react";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import customTheme from "../src/theme/index";
import Home from "./components/home";
import NotFound from "./components/404";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
  </React.StrictMode>
);
