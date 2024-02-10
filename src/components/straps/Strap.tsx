import { FC } from "react";
import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { ChakraBox } from "../../customchakra";

const blackSkills = [
  "HTML",
  "React",
  "TypeScript",
  "Next js",
  "Jest",
  "Vercel",
  "GitHub",
];

const whiteSkills = [
  "CSS",
  "Chakra UI",
  "Framer Motion",
  "Tailwind CSS",
  "JavaScript",
  "Figma",
  "Git",
];

const Strap: FC<{ theme?: "light" | "dark" }> = ({ theme = "light" }) => {
  const { colorMode } = useColorMode();

  const strapVariants = {
    initial: { translateX: "0%" },
    animate: {
      translateX: "-103%",
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    },
  };

  const skills = theme === "light" ? whiteSkills : blackSkills;

  return (
    <ChakraBox
      userSelect={"none"}
      border={`1px solid ${theme === "light" ? "#CBCBCB" : "#0D0C0C"}`}
      background={theme === "light" ? "white" : "black"}
      w={"1105.009px"}
      display={"flex"}
      h={"77px"}
      shadow={colorMode === "dark" ? "strap" : "none"}
      variants={strapVariants}
      overflow={"hidden"}
    >
      <ChakraBox
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"81px"}
        minW={{
          base: theme === "light" ? "1900px" : "1900px",
          "5xl": theme === "light" ? "2300px" : "2100px",
        }}
        variants={strapVariants}
        initial="initial"
        animate="animate"
      >
        {skills.map((skill, index) => (
          <HStack
            key={index}
            flexShrink={"0"}
            justifyContent={"center"}
            spacing={"80px"}
          >
            <Text
              color={theme === "light" ? "gray.500" : "white"}
              fontFamily={"roboto"}
              fontSize={{ base: "xl", "5xl": "3xl" }}
              textTransform={"uppercase"}
            >
              {skill}
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
            >
              <path
                d="M12.0768 0.771446L20.3083 15.6645L28.0589 0.723135L23.2809 16.8627L39.5397 11.8415L24.5511 19.7733L39.794 27.6137L23.3749 22.6913L28.6728 38.8004L20.4413 23.9074L12.6907 38.8487L17.4687 22.7092L1.20988 27.7303L16.1985 19.7985L0.955571 11.9582L17.3747 16.8805L12.0768 0.771446Z"
                fill="#FF7E21"
              />
            </svg>
          </HStack>
        ))}
      </ChakraBox>

      <ChakraBox
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexShrink={"0"}
        gap={"81px"}
        minW={{
          base: theme === "light" ? "1900px" : "1900px",
          "5xl": theme === "light" ? "2300px" : "2100px",
        }}
        variants={strapVariants}
        initial="initial"
        animate="animate"
      >
        {skills.map((skill, index) => (
          <HStack
            key={index}
            flexShrink={"0"}
            justifyContent={"center"}
            spacing={"80px"}
          >
            <Text
              color={theme === "light" ? "gray.500" : "white"}
              fontFamily={"roboto"}
              fontSize={{ base: "xl", "5xl": "3xl" }}
              textTransform={"uppercase"}
            >
              {skill}
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
            >
              <path
                d="M12.0768 0.771446L20.3083 15.6645L28.0589 0.723135L23.2809 16.8627L39.5397 11.8415L24.5511 19.7733L39.794 27.6137L23.3749 22.6913L28.6728 38.8004L20.4413 23.9074L12.6907 38.8487L17.4687 22.7092L1.20988 27.7303L16.1985 19.7985L0.955571 11.9582L17.3747 16.8805L12.0768 0.771446Z"
                fill="#FF7E21"
              />
            </svg>
          </HStack>
        ))}
      </ChakraBox>
    </ChakraBox>
  );
};

export default Strap;
