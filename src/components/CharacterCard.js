import React from 'react'
import {
    Flex, Image, Box, Badge
  } from '@chakra-ui/core';


function CharacterCard(props){
return(
    <Box  p="10px" objectFit="cover" maxW="sm" borderWidth="1px" borderColor="footfeet.100" rounded="lg" overflow="hidden">
     <Image 
     src={props.characters.image} alt="character_image" 
     objectFit="cover"
     rounded="md"
     />
     <Box p="6">
        <Flex d="flex" alignItems="baseline" justify="center">
          <Badge justify="center" rounded="full" px="2" variantColor="teal">
            Rating:{props.characters.status}
          </Badge>
          
        </Flex>

        <Flex
          mt="1"
          justify="center"
          color="white"
          fontWeight="semibold"
          as="h5"
          lineHeight="tight"
          isTruncated
        >
          {props.characters.name}
        </Flex>
        <Flex justify="center" mt="2" alignItems="center">
          
          <Box  isTruncated as="span" ml="2" color="gray.600" fontSize="sm">
            {props.characters.name}min
          </Box>
        </Flex>
      </Box>
    </Box>
)
}


export default CharacterCard