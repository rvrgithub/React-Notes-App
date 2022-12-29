import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from '@chakra-ui/react'

export const Header = () => {
const [isNoteSmallScreen] = useMediaQuery("(min-width:750px)")
  return (
    <Flex direction="row" h="80px" p="10px 50px" bg="#ffc008"  boxShadow= "20px 20px 50px 10px orange inset">
      <Image
        // w="10%"
        w={isNoteSmallScreen ? "11%" : "11%"}
        h="100%"
        src="https://yanado.com/blog/wp-content/uploads/2015/01/google-keep-logo.png"
        alt="logo_image"
      />
      <Text
        fontWeight={"700"}
        // fontSize="35px"
        fontSize={isNoteSmallScreen ? "35px" : "20px"}
        lineHeight={isNoteSmallScreen ? "40px" : "45px"}
        textAlign={"center"}
        marginLeft="35%"
        // lineHeight={"40px"}
        letterSpacing="10px"
        color="white"
      >
        Keep Notes
      </Text>
    </Flex>
  );
};
