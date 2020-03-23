import React, { Component } from 'react'
import { Stack } from "@chakra-ui/core"
import EpisodeList from '../../components/EpisodeList'


class Characters extends Component{
  state={
      allCharacters: []
  }

    render(){
        return(
            <Stack 
            w="100vw"
            bg="yankeesblue.100"
            >
                < EpisodeList characters={this.state.allCharacters}/>
            </Stack>
        )
 
    }
}

export default Characters