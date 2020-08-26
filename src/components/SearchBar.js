import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Input, Flex, IconButton } from '@chakra-ui/core'
const baseUrl = 'https://rickandmortyapi.com/api/character'

function SearchBar() {
  const [character, setCharacter] = useState('')
  const [result, setResult] = useState([])

  const handleChange = (e) => {
    const inputText = e.target.value
    console.log(inputText)
    setCharacter(inputText)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
     axios.get(`${baseUrl}?name=${character}`)
     .then(res => console.log(res.data.results))
     .then(res => setResult(res))
     .catch(err => console.error(err))
  }

  useEffect(() => {

  },[])

  
    return (
      <Flex justify='center' mt="15vh" pt='20px'>
        <Input 
            bg='yankeesblue.100' 
            borderColor='green.300' 
            placeholder='Search for characters and episodes' 
            color='white'
            w='50vw' 
            onChange={handleChange}/>
          <IconButton 
            bg='yankeesblue.100' 
            border='1px' 
            color='green.300' 
            borderColor='green.300' 
            aria-label='Search database' 
            icon='search' 
            onClick={handleSubmit}/>
          </Flex>
    )
 
}

export default SearchBar
