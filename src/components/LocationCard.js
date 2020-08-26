import React from 'react'
import { Flex } from "@chakra-ui/core"

const LocationCard = ({locations : {name, type, dimension}}) => {
    return(
        <Flex justify="center" 
          bg="indigo.100" 
          border="1px" 
          borderColor="footfeet.100" 
          w="100%" 
          p={4} 
          color="white"
          direction="column">
        <Flex >{name}</Flex> 
            <Flex color="green.200">{type}</Flex>
            <Flex color="gray.500" fontSize="sm">{dimension}</Flex> 
        </Flex>
    )
}

export default LocationCard