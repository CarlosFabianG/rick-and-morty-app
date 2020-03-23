import React, { Component } from 'react'
import { Stack, Text } from "@chakra-ui/core"
import CharacterList from '../../components/CharacterList'
import EpisodeList from '../../components/EpisodeList'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'

class Home extends Component{
    state = {
        lastCharacters: [],
        lastEpisodes: []
    }

async getCharacters(){
   const data = await axios.get('https://rickandmortyapi.com/api/character')
    console.log(data)
   this.setState({lastCharacters: data.data.results})
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
< Text
color="white"
>Last Episodes</Text>
< EpisodeList lastEpisodes={this.state.lastEpisodes}/>
< Text
mt="100px"
color="white"
>Last Characters</Text>
{this.state.lastCharacters?<CharacterList characters={this.state.lastCharacters}/>:null}
</Stack>
</>
)
    }
}

export default Home