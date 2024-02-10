import { FC } from "react";
import { Button } from "@chakra-ui/react";
import { MdCached } from "react-icons/md";
import { ChakraBox, ChakraText, ChakraHeading } from "../../customchakra";
import MobileView from "./Mobile";
import DesktopView from "./Desktop";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Work: FC<ProjectProps> = ({ project }) => {
  const {
    projectDescription,
    projectTitle,
    projectStacks,
    projectUrl,
    mobileImg,
    desktopImg,
  } = project.fields;

  return (
    <ChakraBox
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"56px"}
      minH={"100%"}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      // @ts-expect-error - framer-motion types are not up to date
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 60,
        damping: 10,
      }}
      w={"full"}
    >
      <ChakraBox
        display={"flex"}
        w={"full"}
        maxW={"1024px"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={{ base: 5, "6xl": 10 }}
      >
        <ChakraHeading
          textAlign={"center"}
          fontSize={{ base: 24, "6xl": 48 }}
          fontWeight={"semi-bold"}
        >
          {projectTitle && projectTitle}
        </ChakraHeading>
        <ChakraText
          // color={"#FFFFFFCC"}
          textAlign={"center"}
          fontSize={{ base: 12, "6xl": 24 }}
        >
          {/* @ts-expect-error - documentToReactComponents is not typed */}
          {projectDescription && documentToReactComponents(projectDescription)}
        </ChakraText>
      </ChakraBox>
      <ChakraBox
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        // border={"1px solid red"}
        gap={"135px"}
        position={"relative"}
        w={{
          base: "340px",
          xl: "450px",
          "2xl": "560px",
          "3xl": "670px",
          "4xl": "780px",
          "5xl": "890px",
          "6xl": "450px",
          "7xl": "560px",
          "8xl": "670px",
          "9xl": "780px",
          "10xl": "890px",
          "11xl": "1000px",
        }}
        h={{
          base: "184px",
          xl: "246px",
          "2xl": "308px",
          "3xl": "370px",
          "4xl": "431px",
          "5xl": "493px",
          "6xl": "246px",
          "7xl": "308px",
          "8xl": "370px",
          "9xl": "431px",
          "10xl": "493px",
          "11xl": "555px",
        }}
      >
        <DesktopView desktopImg={desktopImg} projectStacks={projectStacks} />
        <MobileView mobileImg={mobileImg} />
      </ChakraBox>
      <ChakraBox w={"full"} pt={"30px"}>
        <Button
          rightIcon={<MdCached />}
          onClick={() => window.open(projectUrl, "_blank")}
        >
          View Project
        </Button>
      </ChakraBox>
    </ChakraBox>
  );
};

export default Work;
