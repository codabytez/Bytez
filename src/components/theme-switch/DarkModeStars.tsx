import {FC} from 'react'
import { ChakraBox } from '../../customchakra'
import { MdStar, SmStar, XsStar } from './star'

const DarkModeStars: FC = () => {
    const variants = {
        animate: {
          opacity: [0.8, 0.5, 0.2, 0.5, 0.8],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

      const variants2 = {
        animate: {
          opacity: [0.8, 0.5, 0.2, 0.5, 0.8],
          transition: {
            duration: 3,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };

      const variants3 = {
        animate: {
          opacity: [0.8, 0.5, 0.2, 0.5, 0.8],
          transition: {
            duration: 5,
            delay: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      };


    return <>
    {/* Md Stars */}
    <ChakraBox
      position={"absolute"}
      top={"21px"}
      left={"15px"}
      variants={variants2}
      animate="animate"
    >
      <MdStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"10px"}
      left={"20px"}
      variants={variants2}
      animate="animate"
    >
      <MdStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"32px"}
      left={"38px"}
      variants={variants2}
      animate="animate"
    >
      <MdStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"8px"}
      left={"49px"}
      variants={variants2}
      animate="animate"
    >
      <MdStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"14px"}
      left={"60px"}
      variants={variants2}
      animate="animate"
    >
      <MdStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"21px"}
      left={"79px"}
      variants={variants2}
      animate="animate"
    >
      <MdStar />
    </ChakraBox>

    {/* Small Stars */}
    <ChakraBox
      position={"absolute"}
      top={"32px"}
      left={"15px"}
      variants={variants}
      animate="animate"
    >
      <SmStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"9px"}
      left={"32px"}
      variants={variants}
      animate="animate"
    >
      <SmStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"21px"}
      left={"55px"}
      variants={variants}
      animate="animate"
    >
      <SmStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"33px"}
      left={"70px"}
      variants={variants}
      animate="animate"
    >
      <SmStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"15px"}
      left={"82px"}
      variants={variants}
      animate="animate"
    >
      <SmStar />
    </ChakraBox>

    {/* Extra small stars */}
    <ChakraBox
      position={"absolute"}
      top={"36px"}
      left={"7px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"16px"}
      left={"10px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"27px"}
      left={"30px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"23px"}
      left={"18px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"36px"}
      left={"28px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"36px"}
      left={"28px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"15px"}
      left={"31px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"10px"}
      left={"50px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"19px"}
      left={"42px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"28px"}
      left={"50px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"25px"}
      left={"45px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      bottom={"28px"}
      left={"63px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"25px"}
      left={"68px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"12px"}
      left={"76px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"38px"}
      left={"83px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox>

    <ChakraBox
      position={"absolute"}
      top={"10px"}
      left={"20px"}
      variants={variants3}
      animate="animate"
    >
      <XsStar />
    </ChakraBox></>
}

export default DarkModeStars
