import { HStack } from "@chakra-ui/react";
import { FC } from "react";
import { ChakraSvg } from "../../customchakra";

const SmallCircle: FC<SmallCircleProps> = ({ props }) => {
  return (
    <HStack {...props}>
      <ChakraSvg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        w={{
          base: "19.544px",
          xl: "34px",
          "4xl": "55px",
        }}
        h={{
          base: "19.544px",
          xl: "34px",
          "4xl": "55px",
        }}
      >
        <circle
          cx="27"
          cy="27"
          r="27"
          transform="matrix(0.707107 0.707107 0.707107 -0.707107 -11 27.1836)"
          fill="url(#paint0_linear_1_27)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_27"
            x1="26.964"
            y1="0"
            x2="26.964"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EFA73F" />
            <stop offset="1" stopColor="#FF7E21C1" stopOpacity="0.11" />
          </linearGradient>
        </defs>
      </ChakraSvg>
    </HStack>
  );
};

export default SmallCircle;
