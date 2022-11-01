import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Header = () => {
  return (
    <Flex  h="80px" p="10px 50px" bg="#ffc008">
    <Image w="10%" h="100%" src="https://yanado.com/blog/wp-content/uploads/2015/01/google-keep-logo.png" alt="logo_image"/>
    <Text fontWeight={"700"} fontSize="35px" textAlign={"center"} marginLeft="30%" lineHeight={"40px"} letterSpacing="10px" color="white">Keep Notes</Text>
    </Flex>
  )
}
