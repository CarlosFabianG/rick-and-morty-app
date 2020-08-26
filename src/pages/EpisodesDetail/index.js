import React, {useState, useEffect} from 'react'
import { Flex, Text, Box } from "@chakra-ui/core"
import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/episode/'

const EpisodesDetail = (props) => {
    
    const [detail, setDetail] = useState([])
    const {id} = props.match.params

    const getEpisode = async () => {
        const {data} = await axios.get(`${baseUrl}${id}`)
        setDetail(data)
    }

    useEffect( () => {
        getEpisode()
    }, [])

    return(
        <>
          <Flex
                w="100vw"
                h="100vh"
                bg="yankeesblue.100"
                justifyContent="center"
                alignItems="flex-start">
           <Box borderWidth="1px" 
                borderColor="footfeet.100"
                bg="indigo.100"
                w="30vw"
                h="20vh" 
                mt="20vh">
                <Text color="white">
                    <Box as="span" fontWeight="bold">Name:</Box>
                    {detail.name}
                </Text>
                <Text color="green.200">
                    <Box as="span" fontWeight="bold">Air Date:</Box>
                    {detail.air_date}
                </Text>
                <Text color="white">
                    <Box as="span" fontWeight="bold">Episode:</Box>
                   {detail.episode} 
                </Text>
           </Box>
           
        </Flex>
        </>
    )
}

export default EpisodesDetail