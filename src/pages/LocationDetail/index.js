import React, {useState, useEffect} from 'react'
import { Stack, Text } from "@chakra-ui/core"
import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/location/'

const LocationDetail = (props) => {
    const [detail, setDetail] = useState({})
    const {id} = props.match.params

    useEffect(() => {
       
        axios.get(`${baseUrl}${id}`)
            
            .then(res => setDetail(res.data))
            .catch( err => console.error(err))
    }, )
    
    return(
        <>
        <Stack
                w="100vw"
                h="100vh"
                bg="yankeesblue.100">
            <Text color="white">{detail.name}</Text>
            <Text>{detail.type}</Text>
            <Text>{detail.dimension}</Text>
        </Stack>
        </>
    )
}

export default LocationDetail