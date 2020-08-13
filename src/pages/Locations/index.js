import React, {useState, useEffect} from 'react'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'
import { Stack, Button, Spinner, Flex } from "@chakra-ui/core"
import EpisodeList from '../../components/EpisodeList'
const baseUrl = 'https://rickandmortyapi.com/api/'

const Locations = () => {
    const [state, setState] = useState([])
    const [status, setStatus] = useState(true)

    useEffect(() => {
        axios.get(`${baseUrl}/location/`)
        .then(res =>  {
            setState(res.data.results)
            setStatus(false)
        })
        .catch(err => console.error(err))
    }, [])

    return(
        <Stack
                w="100vw"
                bg="yankeesblue.100">
        <SearchBar />
        { status && <Flex  mt="20vh" justify = "center"> 
            <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="footfeet.500"
            size="15vw"
           
            />
          </Flex> }
        <EpisodeList locations={state}/>
        </Stack>
    )
}

export default Locations