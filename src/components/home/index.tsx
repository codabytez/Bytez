import {
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import Layout from "../../Layout";
import Socials from "../socials";
import Strap from "../straps/Strap";
import Work from "../projects/work";
import { ChakraBox, ChakraSpan } from "../../customchakra";
import { ContentType } from "contentful";
import { getAllProjects } from "../../helper/api-utils";
import { DocumentDescription, DocumentTitle } from "../seo";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Chakra UI",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "GitHub",
  "Figma",
  "Framer Motion",
  "Vercel",
  "Netlify",
  "Appwrite",
  "Firebase",
  "Jest",
  "Testing Library",
];

const Home: FC = () => {
  const { colorMode } = useColorMode();
  const [projects, setProjects] = useState<ContentType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProjects();
      setProjects(response.items as []);
    };
    void fetchProjects();
  }, []);

  return (
    <>
      <DocumentTitle title="Codabytez" />
      <DocumentDescription description="Welcome to my world!!! I'm a Frontend Web Developer. This portfolio features a variety of beautiful, responsive and functional websites created using JavaScript, React, TypeScript, Tailwind CSS and Chakra UI" />
      <Layout>
        <VStack
          w={{ base: "100%", "5xl": "790px" }}
          spacing={{ base: 6, xl: 10 }}
          alignItems={{ base: "center", "5xl": "flex-start" }}
          position={"absolute"}
          top={{ base: "0%", "5xl": "40%" }}
          px={4}
          pb={{ base: 10, "5xl": 0 }}
          maxH={"100vh"}
          overflowY={"scroll"}
          overflowX={"hidden"}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <VStack
            w={{ base: "100%", "3xl": "790px" }}
            spacing={{ base: 6, xl: 10 }}
            alignItems={"flex-start"}
            minH={{ base: "90vh", "5xl": "auto" }}
            justifyContent={"flex-start"}
            pt={{ base: 36, "5xl": 0 }}
          >
            <Heading
              as={"h1"}
              fontSize={{ base: 50, xl: 80, "3xl": 120 }}
              textTransform={"capitalize"}
              lineHeight={"100%"}
              fontWeight={400}
            >
              Hello World!!
            </Heading>
            <Text fontSize={{ xl: 20, "3xl": 32 }} textTransform={"capitalize"}>
              Welcome to My{" "}
              <ChakraSpan color={"orange"} display={"inline"}>
                World!
              </ChakraSpan>{" "}
              I&apos;m (Coda)Bytez A{" "}
              <ChakraSpan color={"orange"} display={"inline"}>
                Frontend
              </ChakraSpan>{" "}
              Web Developer
            </Text>
            <VStack display={{ base: "flex", "5xl": "none" }}>
              <Socials />
            </VStack>
          </VStack>
          <VStack display={{ base: "flex", "5xl": "none" }}>
            <Strap theme={colorMode} />
          </VStack>
          <HStack
            flexWrap={"wrap"}
            spacing={4}
            display={{ base: "flex", "5xl": "none" }}
          >
            {skills.map((skill, index) => (
              <Button key={index}>{skill}</Button>
            ))}
          </HStack>
          <VStack display={{ base: "flex", "5xl": "none" }}>
            <Strap theme={colorMode} />
          </VStack>
          <ChakraBox
            display={{ base: "flex", "5xl": "none" }}
            p={"59px 17px 0px"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={"60px"}
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "y mandatory",
            }}
            w={{
              base: "full",
              "2xl": "650px",
              "9xl": "780px",
              "10xl": "890px",
              "11xl": "1000px",
            }}
          >
            {projects.slice(0, 4).map((project) => (
              // @ts-expect-error - contentful types are not up to date
              <Work key={project.sys.id} project={project} />
            ))}
          </ChakraBox>
        </VStack>
      </Layout>
    </>
  );
};

export default Home;
