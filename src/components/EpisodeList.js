import React from 'react'
import EpisodeCard from './EpisodeCard'
import {Link} from 'react-router-dom'
import {
    SimpleGrid
  } from '@chakra-ui/core'


function EpisodeList(props){


    return(
        <SimpleGrid m="10px" mt='10vh' minChildWidth="300px" justify='center' columns={[1, 2, 3]} spacing={10}>
          
         {props.episodes.map(episode => <Link to={`episodes/${episode.id}`} key={episode.id}><EpisodeCard  episodes={episode}/> </Link>)}
          
        </SimpleGrid>
    )

}

export default EpisodeList