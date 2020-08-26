import React from 'react'
import EpisodeCard from './EpisodeCard'
import LocationCard from './LocationCard'
import {Link} from 'react-router-dom'
import {
    SimpleGrid
  } from '@chakra-ui/core'


function EpisodeList(props){


    return(
        <SimpleGrid m="10px" mt='10vh' minChildWidth="300px" justify='center' columns={[1, 2, 3]} spacing={10}>
          
         { props.episodes && props.episodes.map(episode => <Link to={`episodes/${episode.id}`} key={episode.id}><EpisodeCard  episodes={episode}/> </Link>)}
         { props.locations && props.locations.map(location => <Link to={`locations/${location.id}`} key={location.id}><LocationCard  locations={location}/> </Link>)}
          
        </SimpleGrid>
    )

}

export default EpisodeList