import React from 'react'
import { Flex, Text, Box } from "@chakra-ui/core"
import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/episodes/'

const EpisodesDetail = () => {
    return(
        <>
          <Flex
                w="100vw"
                h="100vh"
                bg="yankeesblue.100"
                justifyContent="center"
                alignItems="flex-start">
           <Box borderWidth="1px" 
                borderColor="footfeet.100"
                bg="indigo.100"
                w="30vw"
                h="20vh" 
                mt="20vh">
                <Text color="white">
                    <Box as="span" fontWeight="bold">Name:</Box>
                    
                </Text>
                <Text color="green.200">
                    <Box as="span" fontWeight="bold">Type:</Box>
                    
                </Text>
                <Text color="white">
                    <Box as="span" fontWeight="bold">Dimension:</Box>
                    
                </Text>
           </Box>
           
        </Flex>
        </>
    )
}

export default EpisodesDetail