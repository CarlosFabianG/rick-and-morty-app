import React from 'react'
import {
    Flex, Image, Box
  } from '@chakra-ui/core';


function CharacterCard(){
return(
    <Box  p="10px" objectFit="cover" maxW="sm" borderWidth="1px" borderColor="footfeet.100" rounded="lg" overflow="hidden">
     <Image 
     src={`https://rickandmortyapi.com/api/character${props.characters.Image}`} alt="movie_poster" 
     objectFit="cover"
     rounded="md"
     />
     <Box p="6">
        <Flex d="flex" alignItems="baseline" justify="center">
          <Badge justify="center" rounded="full" px="2" variantColor="teal">
            Rating:{props.characters.status}
          </Badge>
          
        </Flex>

        <Box
          mt="1"
          color="white"
          fontWeight="semibold"
          as="h5"
          lineHeight="tight"
          isTruncated
        >
          {props.characters.name}
        </Box>
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