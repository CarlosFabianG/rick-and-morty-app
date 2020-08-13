import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { Stack, Button, Spinner, Flex } from "@chakra-ui/core"
import EpisodeList from '../../components/EpisodeList'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/'


class Episodes extends Component {
    state = {
        loading: true,
        allEpisodes: []
    }

    componentDidMount(){
this.getAllEpisodes()
    }

    async getAllEpisodes(){
        this.setState({loading: true})
        const data = await axios.get(`${baseUrl}episode`) 
        this.setState({allEpisodes: data.data.results, loading: false}) 
     }

     componentDidUpdate(){
        this.getOtherPages()
      }

    async getOtherPages(){
        const data = await axios.get(`${baseUrl}episode?page=2`)
        this.setState({allEpisodes: data.data.results})
    }  

    render(){
        if(this.state.loading){
            return (
                <Stack
    mt="10vh"
    minH="90vh"
    backgroundColor="yankeesblue.100"
    textAlign="center"
    w="100vw"
    spacing={8} 
>
<Stack>
< SearchBar />    
<Flex  mt="20vh" justify = "center"> 
<Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="footfeet.500"
            size="15vw"
           
          />
          </Flex> 
</Stack>
</Stack>
)
    }

        return(
            <Stack 
        w="100vw"
        bg="yankeesblue.100"
        >
            < SearchBar />
            < EpisodeList episodes={this.state.allEpisodes} />
            <Button variantColor="teal" variant="outline">
    Button
  </Button>
        </Stack>
        )
    }
}

export default Episodes