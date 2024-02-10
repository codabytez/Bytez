import { FC } from "react";
import Layout from "../../Layout";
import { Heading, Link, useColorMode } from "@chakra-ui/react";
import { ChakraBox, ChakraSvg } from "../../customchakra";
import { DocumentDescription, DocumentTitle } from "../seo";


const contact = [
  {
    name: "email",
    value: "chidiobinna0001@gmail.com",
    link: "mailto:chidiobinna0001@gmail.com",
  },
  {
    name: "linkedin",
    value: "linkedin.com/in/codabytez",
    link: "https://www.linkedin.com/in/codabytez/",
  },
  {
    name: "github",
    value: "github.com/codabytez",
    link: "https://www.github.com/codabytez/",
  },
];

const Contact: FC = () => {
  const { colorMode } = useColorMode();
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
    <DocumentTitle title="Contact me" />
      <DocumentDescription description="Want to get in touch?!!" />
    <Layout>
      <ChakraBox
        display={"flex"}
        flexDirection={"column"}
        gap={20}
        alignItems={"flex-start"}
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        px={8}
        w={{
          base: "full",
          "5xl": "600px",
          "6xl": "800px",
          "7xl": "800px",
          "8xl": "900px",
          "9xl": "1000px",
        }}
        maxW={"1000px"}
        position={"absolute"}
        maxH={"85vh"}
        pb={10}
        overflowY={"scroll"}
        overflowX={"hidden"}
        top={{ base: "15%", xl: "30%", "5xl": "30%" }}
        right={"0%"}
        transform={"translate(-50%, -50%)"}
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <ChakraBox
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ base: "center", "5xl": "flex-start" }}
          w={{ base: "full", "5xl": "auto" }}
          variants={variants}
        >
          <Heading
            as={"h3"}
            fontSize={{ base: 30, xl: 40 }}
            fontWeight={"normal"}
          >
            Contact
          </Heading>
          <ChakraSvg
            xmlns="http://www.w3.org/2000/svg"
            width={"50%"}
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
          flexWrap={"wrap"}
          gap={{ base: 16, xl: 24 }}
          justifyContent={"flex-start"}
          variants={variants}
          pr={16}
        >
          {contact.map((contact, index) => (
            <ChakraBox
              display={"flex"}
              flexDirection={"column"}
              gap={4}
              alignItems={"flex-start"}
              key={index}
              variants={variants}
            >
              <Heading
                as={"h4"}
                fontSize={{ base: 24, xl: 32 }}
                textTransform={"uppercase"}
                fontWeight={"normal"}
              >
                {contact.name}:{" "}
              </Heading>
              <Link
                href={contact.link}
                color={colorMode === "dark" ? "#CBCBCB" : "#00000099"}
                fontSize={{ base: 14, xl: 16 }}
                fontWeight={400}
                textDecoration={"underline"}
                letterSpacing={"0.32px"}
                _hover={{
                  color: "#FF7E21",
                }}
              >
                {contact.value}
              </Link>
            </ChakraBox>
          ))}
        </ChakraBox>
      </ChakraBox>
    </Layout>
    </>
  );
};

export default Contact;
