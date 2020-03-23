import React, { Component } from 'react'
import { Flex } from "@chakra-ui/core"


function EpisodeCard(props) {

  return (
    <Flex justify="center" bg="indigo.100" border="1px" borderColor="footfeet.100" w="100%" p={4} color="green.200">
 <Flex >{props.episodes.name}</Flex> 
</Flex>
  )
}

export default EpisodeCard