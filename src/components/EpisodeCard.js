import React from 'react'
import { Flex } from "@chakra-ui/core"


function EpisodeCard(props) {

  return (
    <Flex justify="center" 
          bg="indigo.100" 
          border="1px" 
          borderColor="footfeet.100" 
          w="100%" 
          p={4} 
          color="green.200"
          direction="column">
 <Flex >{props.episodes.name}</Flex> 
 <Flex color="gray.500" fontSize="sm">{props.episodes.air_date}</Flex> 
</Flex>
  )
}

export default EpisodeCard