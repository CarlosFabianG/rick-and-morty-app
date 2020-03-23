import React, { Component } from 'react'
import { Stack, Text } from "@chakra-ui/core"
import CharacterList from '../../components/CharacterList'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'

class Home extends Component{
    state = {
        characters: []
    }

async getCharacters(){
   const data = await axios.get('https://rickandmortyapi.com/api/character')
    console.log(data)
   this.setState({characters: data.data.results})
   console.log(this.state.characters)
}

componentDidMount(){
    this.getCharacters()
}
   

    render(){
return (
    <>
<Stack 
w="100vw"
bg="yankeesblue.100"
>
< SearchBar />
{this.state.characters?<CharacterList lastCharacters={this.state.characters}/>:null}
</Stack>
</>
)
    }
}

export default Home