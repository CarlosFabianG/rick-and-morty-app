import React, { Component } from 'react'
import { Stack } from "@chakra-ui/core"
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
        </Stack>
        )
 
    }
}

export default Characters