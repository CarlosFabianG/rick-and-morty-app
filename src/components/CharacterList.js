import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CharacterCard from './CharacterCard'
import { SimpleGrid } from "@chakra-ui/core"

function CharacterList(props)  {
    
    
        return(
         <SimpleGrid m="10px" mt='10vh' mb="10vh" minChildWidth="200px" justify='center' columns={[1, 2, 3]} spacing={10}>
            
            {props.lastCharacters.map( character => <Link  to={`/characters/detail/${character.id}`}><CharacterCard  key={character.id} characters={character}/> </Link>)}     
              
        </SimpleGrid>
        )
    
}

export default CharacterList