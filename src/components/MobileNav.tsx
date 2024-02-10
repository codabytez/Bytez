import { FC, useState } from "react";
import { ChakraBox, ChakraSvg, ChakraText, ChakraSpan } from "../customchakra";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import ThemeSwitch from "./theme-switch";
import { motion } from "framer-motion";

const links = [
  { name: "Home", to: "/" },
  { name: "About me", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("gray.700", "white");

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChakraBox
      bg={bg}
      position={"fixed"}
      top={0}
      display={{ base: "flex", "5xl": "none" }}
      w={"150%"}
      h={"64px"}
      gap={4}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={9999}
    >
      <ChakraSvg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 25 24"
        fill="none"
        pt={4}
        cursor={"pointer"}
        onClick={toggleNav}
        position={"relative"}
        top={-2}
        // zIndex={20}
      >
        <motion.path
          animate={{
            d: isOpen
              ? "M18.5 6L6.5 18M6.5 6L18.5 18"
              : "M3.5 12H15.5M3.5 6H21.5M3.5 18H21.5",
          }}
          transition={{ duration: 0.4, type: "tween" }}
          stroke="#EFA73F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </ChakraSvg>

      <ChakraBox
        w={"150%"}
        // h={"454px"}
        bg={bg}
        display={"flex"}
        position={"fixed"}
        top={"60px"}
        pt={{ base: "20px", xl: "81px" }}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        gap={{ xl: "53.3px" }}
        borderRadius={"0, 0, 8px, 8px"}
        // shadow={"mobileNav"}
        animate={{
          transform: isOpen ? "translateY(0%)" : "translateY(-200%)",
        }}
        // @ts-expect-error - frame-motion types are not up to date
        transition={{ duration: 1 }}
      >
        <ChakraBox
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ base: "40px", xl: "64px" }}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              as={ReactRouterLink}
              to={link.to}
              color={color}
              fontSize={{ base: 16, xl: 32 }}
              textAlign={"center"}
              fontFamily={"poppins"}
              _hover={{ color: "orange" }}
              onClick={toggleNav}
            >
              {link.name}
            </Link>
          ))}
          <ThemeSwitch />
        </ChakraBox>
        <ChakraBox
          display={"flex"}
          p={4}
          flexDir={"column"}
          alignItems={"center"}
          gap={"16px"}
          alignSelf={"stretch"}
          bg={bg}
        >
          <ChakraBox
            display={"flex"}
            h={"1px"}
            w={"full"}
            bg={color}
            opacity={0.2}
          />
          <ChakraText
            color={color}
            fontSize={12}
            fontWeight={100}
            fontFamily={"poppins"}
            textAlign={"center"}
          >
            © {new Date().getFullYear()} by{" "}
            <ChakraSpan color={"orange"}>CODABYTEZ</ChakraSpan> All rights
            reserved
          </ChakraText>
        </ChakraBox>
      </ChakraBox>
    </ChakraBox>
  );
};

export default MobileNav;
