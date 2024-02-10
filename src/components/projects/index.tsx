import { FC, useEffect, useState } from "react";
import Layout from "../../Layout";
import { Heading } from "@chakra-ui/react";
import Work from "./work";
import { ChakraBox, ChakraSvg } from "../../customchakra";
import { ContentType } from "contentful";
import { getAllProjects } from "../../helper/api-utils";
import { DocumentDescription, DocumentTitle } from "../seo";

const Projects: FC = () => {
  const [projects, setProjects] = useState<ContentType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProjects();
      setProjects(response.items as []);
    };
    void fetchProjects();
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 60,
        damping: 10,
        staggerChildren: 1,
        delayChildren: 0.7,
      },
    },
  };

  return (
    <>
      <DocumentTitle title="My Projects" />
      <DocumentDescription description="This portfolio features a variety of beautiful, responsive and functional websites created using JavaScript, React, TypeScript, Tailwind CSS and Chakra UI" />
      <Layout>
        <ChakraBox
          display={"flex"}
          gap={10}
          alignItems={"flex-start"}
          justifyContent={{ base: "center", "5xl": "flex-end" }}
          position={"absolute"}
          top={"10%"}
          right={{ base: 0, "6xl": 10 }}
          px={{ base: 5, "6xl": 10 }}
          w={{
            base: "full",
            "5xl": "700px",
            "6xl": "800px",
            "7xl": "800px",
            "8xl": "850px",
            "9xl": "900px",
            "10xl": "1000px",
            "11xl": "1100px",
          }}
          maxW={"1100px"}
          overflowY={"scroll"}
          overflowX={"hidden"}
          maxH={"90%"}
          pb={10}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
          }}
        >
          <ChakraBox
            display={"flex"}
            flexDirection={"column"}
            gap={5}
            variants={variants}
            initial={"initial"}
            animate={"animate"}
          >
            <ChakraBox
              display={"flex"}
              flexDirection={"column"}
              alignItems={{ base: "center", "5xl": "flex-start" }}
              justifyContent={"flex-start"}
              variants={variants}
              py={"10px"}
            >
              <Heading
                as={"h3"}
                fontSize={{ base: 30, "6xl": 40 }}
                fontWeight={"normal"}
              >
                My Projects
              </Heading>
              <ChakraSvg
                xmlns="http://www.w3.org/2000/svg"
                width={"10%"}
                height="1"
                viewBox="0 0 61 2"
                fill="none"
                animate={{ opacity: [1, 0.2, 1] }}
                // @ts-expect-error - framer-motion types are not up to date
                transition={{ duration: 3, repeat: Infinity }}
              >
                <path d="M61 1L1.40071e-06 1" stroke="#FF7E21" />
              </ChakraSvg>
            </ChakraBox>

            <ChakraBox
              display={"flex"}
              p={"59px 17px 0px"}
              flexDirection={"column"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"60px"}
              variants={variants}
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
              {projects.map((project) => (
                // @ts-expect-error - contentful types are not up to date
                <Work key={project.sys.id} project={project} />
              ))}
            </ChakraBox>
          </ChakraBox>
        </ChakraBox>
      </Layout>
    </>
  );
};

export default Projects;
