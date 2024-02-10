import { FC } from "react";
import { ChakraBox, ChakraSvg, ChakraText } from "../../customchakra";
import BoltSvg from "./BoltSvg";
import { Image } from "@chakra-ui/react";

const DesktopView: FC<DesktopViewProps> = ({ desktopImg, projectStacks }) => {
  return (
    <ChakraBox
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"45px"}
      position={"absolute"}
      top={0}
      w={"full"}
    >
      <ChakraSvg
        flex={"1 0 0"}
        alignSelf={"stretch"}
        xmlns="http://www.w3.org/2000/ChakraSvg"
        width="1024"
        height="555"
        viewBox="0 0 1024 555"
        fill="none"
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
        position={"absolute"}
      >
        <path
          d="M1023.11 96.0738C1023.11 84.4447 1014.15 74.7822 1002.55 73.9137L24.7707 0.677449C11.8798 -0.288083 0.888672 9.91067 0.888672 22.8376V458.926C0.888672 470.555 9.85449 480.218 21.4511 481.086L999.229 554.322C1012.12 555.288 1023.11 545.089 1023.11 532.162V96.0738Z"
          fill="#B96400"
          fillOpacity="0.1"
        />
      </ChakraSvg>
      <ChakraBox
        display={"flex"}
        w={{
          base: "265px",
          xl: "354px",
          "2xl": "443px",
          "3xl": "533px",
          "4xl": "622px",
          "5xl": "711px",
          "6xl": "354px",
          "7xl": "443px",
          "8xl": "533px",
          "9xl": "622px",
          "10xl": "711px",
          "11xl": "800px",
        }}
        h={{
          base: "135px",
          xl: "180px",
          "2xl": "225px",
          "3xl": "270px",
          "4xl": "315px",
          "5xl": "360px",
          "6xl": "180px",
          "7xl": "225px",
          "8xl": "270px",
          "9xl": "314px",
          "10xl": "359px",
          "11xl": "404px",
        }}
        p={"5px"}
        flexDirection={"column"}
        gap={"5px"}
        borderRadius={{ base: "7.4px", "8xl": "23px" }}
        border={"0.5px solid #B964001A"}
        position={"relative"}
        top={"30px"}
        zIndex={1}
        animate={{
          background:
            "radial-gradient(100% 100% at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.02) 100%)",
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty("--mouse-x", `${x + 4}%`);
          e.currentTarget.style.setProperty("--mouse-y", `${y + 5}%`);
        }}
        whileHover={{
          // @ts-expect-error - framer-motion types are not up to date
          "--mouse-x": "50%",
          "--mouse-y": "0%",
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        boxShadow={"project"}
        backdropFilter={"blur(6.6666669845581055px)"}
      >
        <ChakraBox
          display={"flex"}
          flexDirection={"column"}
          gap={"5px"}
          flex={"1 0 0"}
          alignSelf={"stretch"}
        >
          <ChakraBox
            display={"flex"}
            flexDirection={"column"}
            gap={"5px"}
            flex={"1 0 0"}
            alignSelf={"stretch"}
            borderRadius={{ base: "3.7px", "8xl": "17.8px" }}
            bg={"#FFFFFF1F"}
            overflow={"hidden"}
          >
            <Image
              src={desktopImg.fields.file.url}
              alt={desktopImg.fields.title}
              h={desktopImg.fields.file.details.image.height}
              w={desktopImg.fields.file.details.image.width}
            />
          </ChakraBox>
          <ChakraBox
            display={"flex"}
            p={{ base: "2.3px 7.4px", "11xl": "6.7px 22px" }}
            alignItems={"center"}
            gap={{ base: "4.5px", "11xl": "13.4px" }}
            alignSelf={"stretch"}
          >
            <BoltSvg />
            <ChakraText
              //  color={"#FFFFFF99"}
              fontSize={9}
            >
              {projectStacks.map((stack) => stack).join(", ")}
            </ChakraText>
          </ChakraBox>
        </ChakraBox>
      </ChakraBox>
    </ChakraBox>
  );
};

export default DesktopView;
