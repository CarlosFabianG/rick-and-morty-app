import React, { Component } from 'react'
import { Stack, Text } from "@chakra-ui/core"
import CharacterList from '../../components/CharacterList'
import EpisodeList from '../../components/EpisodeList'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'

class Home extends Component{
    state = {
        characters: [],
        lastEpisodes: []
    }

async getCharacters(){
   const data = await axios.get('https://rickandmortyapi.com/api/character')
    console.log(data)
   this.setState({characters: data.data.results})
   console.log(this.state.characters)
}

async getLastEpisodes(){
   const data = await axios.get('https://rickandmortyapi.com/api/episode') 
   this.setState({lastEpisodes: data.data.results}) 
}

componentDidMount(){
    this.getCharacters()
    this.getLastEpisodes()
}
   

    render(){
return (
    <>
<Stack 
w="100vw"
bg="yankeesblue.100"
>
< SearchBar />
< EpisodeList lastEpisodes={this.state.lastEpisodes}/>
{this.state.characters?<CharacterList lastCharacters={this.state.characters}/>:null}
</Stack>
</>
)
    }
}

export default Home