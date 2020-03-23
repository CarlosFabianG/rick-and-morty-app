import React, { Component } from 'react'
import { Stack } from "@chakra-ui/core"
import EpisodeList from '../../components/EpisodeList'
import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/'


class Episodes extends Component {
    state = {
        allEpisodes: []
    }

    componentDidMount(){
this.getAllEpisodes()
    }

    async getAllEpisodes(){
        const data = await axios.get(`${baseUrl}episode`) 
        this.setState({allEpisodes: data.data.results}) 
     }

    render(){
        return(
            <Stack 
        w="100vw"
        bg="yankeesblue.100"
        >
            < EpisodeList episodes={this.state.allEpisodes} />
        </Stack>
        )
    }
}

export default Episodes