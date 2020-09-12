import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Text } from "@chakra-ui/core"
import CharacterList from '../../components/CharacterList'
import EpisodeList from '../../components/EpisodeList'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'
import { connect } from 'react-redux'
const baseUrl = 'https://rickandmortyapi.com/api/'



class Home extends Component{
    state = {
        recentCharacters: [],
        recentEpisodes: []
    }

async getLastEpisodes(){
   const data = await axios.get(`${baseUrl}/episode`) 
   this.setState({recentEpisodes: data.data.results}) 
}

componentDidMount(){
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
{this.state.recentCharacters?<CharacterList characters={this.props.recentCharacters}/>:null}
<Link to={'/characters'}><Text color="white">See all characters</Text></Link>
</Stack>
</>
)
    }
}

function mapStateToProps(state,props){
    return {
        recentCharacters: state.recentCharacters,
        recentEpisodes: state.recentEpisodes
    }
}

export default connect(mapStateToProps, null)(Home)
