import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Stack, Text } from "@chakra-ui/core"
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

     componentDidUpdate(){
        this.getOtherPages()
      }

    async getOtherPages(){
        const data = await axios.get(`${baseUrl}episode?page=2`)
        this.setState({allEpisodes: data.data.results})
    }  

    render(){
        return(
            <Stack 
        w="100vw"
        bg="yankeesblue.100"
        >
            < EpisodeList episodes={this.state.allEpisodes} />
            <Link to={`${baseUrl}episode?page=2`}>
               <Text color="white">Next page</Text>
            </Link>
        </Stack>
        )
    }
}

export default Episodes