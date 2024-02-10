// Layout.tsx
import React from "react";
import { HStack, Link, Image } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Straps from "./components/straps";
import Eclipse from "./components/eclipse";
import SlidingText from "./components/slidingText.tsx";
import Socials from "./components/socials/index.tsx";
import { useLocation } from "react-router-dom";
import { ChakraBox } from "./customchakra.tsx";
import ThemeSwitch from "./components/theme-switch/index.tsx";
import MobileNav from "./components/MobileNav.tsx";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const variants = {
    initial: { opacity: 0, x: path === "/" ? "-100%" : "100%" },
    enter: { opacity: [0, 0.5, 1], x: path === "/" ? "0%" : "0%" },
  };

  return (
    <HStack
      h={"100vh"}
      // w={"full"}
      maxW={"1920px"}
      alignItems={"center"}
      justifyContent={"center"}
      mx={"auto"}
      minW={"360px"}
    >
      <MobileNav />
      <HStack
        h={"100vh"}
        maxH={"1080px"}
        alignItems={"center"}
        w={"full"}
        maxW={"1920px"}
        // borderRadius={"40px"}
        overflow={"hidden"}
        position={"relative"}
        // border={"5px solid red"}
      >
        <ChakraBox display={{ base: "none", "5xl": "flex" }}>
          <ThemeSwitch />
          <Socials />
        </ChakraBox>
        <SlidingText />
        <Eclipse />
        <Straps />
        <Sidebar />

        <Link
          href={"https://wakatime.com/@e01f1d03-419c-4041-ac1e-4feedadb1682"}
          position={"absolute"}
          bottom={8}
          left={5}
          isExternal
          display={{ base: "none", "5xl": "flex" }}
        >
          <Image
            src="https://wakatime.com/badge/user/e01f1d03-419c-4041-ac1e-4feedadb1682.svg?style=social"
            alt="Total time coded since Jan 11 2023"
          />
        </Link>

        <ChakraBox
          display={"flex"}
          gap={"20px"}
          flexDirection={"column"}
          position={"relative"}
          w={"full"}
          h={"full"}
          initial="initial"
          animate="enter"
          variants={variants}
          //@ts-expect-error - framer-motion types are not up to date
          transition={{ duration: 3, delay: 1 }}
        >
          {children}
        </ChakraBox>
      </HStack>
    </HStack>
  );
};

export default Layout;
