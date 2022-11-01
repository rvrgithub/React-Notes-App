import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import {DeleteIcon } from '@chakra-ui/icons'
export const Cards = (prop) => {
    console.log("prop",prop.id)
    const deleteNote=(id)=>{
// console.log("id",prop.id);
prop.onDeleteNote(prop.id)
    }


    
  return (
    <Box margin={"auto"} borderRadius='md' bg={prop.color} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" px={4} h="autoFit"  textAlign={"left"}>
        <Text fontWeight={"bold"}>{prop.data.title}</Text>
        <Text>{prop.data.description}</Text>
        <Text>{prop.data.date}</Text>
        <Button marginLeft={"92%"} marginTop="10px" w="25px" borderRadius="50%" onClick={deleteNote}><DeleteIcon  fontSize={"20px"}/></Button>
    </Box>
  )
}
