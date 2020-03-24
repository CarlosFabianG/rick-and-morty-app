import React, { Component } from 'react'
import { Stack, Text } from "@chakra-ui/core"
import CharacterList from '../../components/CharacterList'
import EpisodeList from '../../components/EpisodeList'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/'

class Home extends Component{
    state = {
        recentCharacters: [],
        recentEpisodes: []
    }

async getCharacters(){
   const data = await axios.get(`${baseUrl}/character`)
    console.log(data)
   this.setState({recentCharacters: data.data.results})
   console.log(this.state.recentCharacters)
}

async getLastEpisodes(){
   const data = await axios.get(`${baseUrl}/episode`) 
   this.setState({recentEpisodes: data.data.results}) 
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
< EpisodeList episodes={this.state.recentEpisodes}/>
< Text
mt="100px"
color="white"
>Last Characters</Text>
{this.state.recentCharacters?<CharacterList characters={this.state.recentCharacters}/>:null}
</Stack>
</>
)
    }
}

export default Home