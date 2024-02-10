import { FC } from "react";
import Layout from "../../Layout";
import { Heading } from "@chakra-ui/react";
import {
  ChakraSvg,
  ChakraBox,
  ChakraText,
  ChakraSpan,
} from "../../customchakra";
import avi from "../../assets/iconB.svg";
import { DocumentDescription, DocumentTitle } from "../seo";

const About: FC = () => {
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
      <DocumentTitle title="About me" />
      <DocumentDescription description="You probably didn't know this!!!" />
      <Layout>
        <ChakraBox
          display={"flex"}
          gap={{ base: 10, "5xl": 20 }}
          alignItems={{ base: "center", "5xl": "flex-start" }}
          flexDirection={{ base: "column", "13xl": "row" }}
          variants={variants}
          initial={"initial"}
          animate={"animate"}
          overflowY={"scroll"}
          overflowX={"hidden"}
          pt={20}
          px={6}
          position={"absolute"}
          right={0}
          top={{ "5xl": "10%" }}
          w={{
            "5xl": "700px",
            "6xl": "800px",
            "7xl": "800px",
            "8xl": "900px",
            "9xl": "1000px",
            "13xl": "1450px",
          }}
          maxH={"100vh"}
          pb={10}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
          }}
        >
          <ChakraBox
            w={{ base: "200px", "5xl": "309px" }}
            h={{ base: "200px", "5xl": "309px" }}
            flexShrink={0}
            borderRadius={"215.6px"}
            border={"1px solid #B964001A"}
            overflow={"hidden"}
          >
            <img src={avi} />
          </ChakraBox>

          <ChakraBox
            // w={{ "5xl": "600px" }}
            maxW={"900px"}
            display={"flex"}
            flexDirection={"column"}
            gap={{ base: 10, "5xl": 20 }}
            alignItems={"flex-start"}
            variants={variants}
          >
            <ChakraBox
              display={"flex"}
              flexDirection={"column"}
              alignItems={{ base: "center", "5xl": "flex-start" }}
              w={{ base: "100%", "5xl": "auto" }}
              variants={variants}
            >
              <Heading as={"h3"} fontSize={40} fontWeight={"normal"}>
                About me
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
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={10}
              variants={variants}
            >
              <ChakraText
                variants={variants}
                fontSize={22}
                lineHeight={1.8}
                letterSpacing={"0.458px"}
              >
                Holla! I&apos;m Obinna. I&apos;m a{" "}
                <ChakraSpan position={"relative"} display={"inline-block"}>
                  <ChakraSvg
                    xmlns="http://www.w3.org/2000/svg"
                    width="87"
                    height="30"
                    viewBox="0 0 87 30"
                    fill="none"
                    position={"absolute"}
                    top={"3px"}
                    left={"6px"}
                    zIndex={-1}
                  >
                    <path
                      d="M12.2342 0.571896L86.0262 13.8922L73.9797 29.0163L0.187728 15.6959L12.2342 0.571896Z"
                      fill="#FF7E21"
                    />
                  </ChakraSvg>
                  Front-end
                </ChakraSpan>{" "}
                developer. As a developer, I have a great love for technology
                and am committed to working as a team to contribute positively.
              </ChakraText>
              <ChakraText
                variants={variants}
                fontSize={22}
                lineHeight={1.8}
                letterSpacing={"0.458px"}
              >
                I have knowledge in several areas, including{" "}
                <ChakraSpan display={"inline"} color={"orange"}>
                  JavaScript, TypeScript, React, NextJs, Tailwind and Chakra UI.
                </ChakraSpan>{" "}
              </ChakraText>
              <ChakraText
                variants={variants}
                fontSize={22}
                lineHeight={1.8}
                letterSpacing={"0.458px"}
              >
                With my years of experience, I&apos;ve developed important
                skills such as problem solving, organization and communication.
                I am always curious and open to new challenges, looking for
                solutions to problems and learning from my mistakes.
              </ChakraText>

              <ChakraText
                variants={variants}
                fontSize={22}
                lineHeight={1.8}
                letterSpacing={"0.458px"}
              >
                <ChakraSpan position={"relative"} display={"inline-block"}>
                  <ChakraSvg
                    xmlns="http://www.w3.org/2000/svg"
                    width="134"
                    height="23"
                    viewBox="0 0 134 23"
                    fill="none"
                    position={"absolute"}
                    top={"5px"}
                    zIndex={-1}
                  >
                    <path
                      d="M16.4858 0.544783L133.431 6.6736L117.111 22.9303L0.166387 16.8015L16.4858 0.544783Z"
                      fill="#FF7E21"
                    />
                  </ChakraSvg>
                  I&apos;m dedicated
                </ChakraSpan>{" "}
                to absorbing as much knowledge as possible and staying up to
                date with emerging trends and technologies.
              </ChakraText>
            </ChakraBox>
          </ChakraBox>
        </ChakraBox>
      </Layout>
    </>
  );
};

export default About;
