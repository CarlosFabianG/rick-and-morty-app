import React, { Component } from 'react'
import { Input, Flex, IconButton } from '@chakra-ui/core'

class SearchBar extends Component {
  render () {
    return (
      <Flex justify='center' mt="15vh" pt='20px'>
        <Input bg='yankeesblue.100' borderColor='green.300' placeholder='Search for a character' w='50vw' />
        <IconButton bg='yankeesblue.100' border='1px' color='green.300' borderColor='green.300' aria-label='Search database' icon='search' />
      </Flex>
    )
  }
}

export default SearchBar
