import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Text } from "@chakra-ui/core"
import CharacterList from '../../components/CharacterList'
import axios from 'axios'
const baseUrl= 'https://rickandmortyapi.com/api/'



class Characters extends Component{
  state={
      allCharacters: []
  }

  componentDidMount(){
this.getAllCharacters()
  }

  async getAllCharacters(){
      const data = await axios.get(`${baseUrl}character`)
      this.setState({allCharacters: data.data.results})
  }

    render(){
      return(
        <Stack 
            w="100vw"
            bg="yankeesblue.100"
            >
            < CharacterList characters={this.state.allCharacters}/>
            <Link>
               <Text>Next page</Text>
            </Link>
        </Stack>
        )
 
    }
}

export default Characters