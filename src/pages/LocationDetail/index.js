import React, {useState, useEffect} from 'react'
import CharacterList from '../../components/CharacterList'
import { Flex, Text, Box } from "@chakra-ui/core"
import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/location/'

const LocationDetail = (props) => {
    const [detail, setDetail] = useState({
        residents: []
    })
    const [residents, setResidents] = useState([])
    const {id} = props.match.params
/*
    const getCharacters = () => {
       axios.get(detail.residents.map(resident => resident))
            .then(res => setResidents(residents.push(res.data)))
            .then( () => console.log(residents))
            .catch(err => console.log(err))
    }
*/
    useEffect(() => {
       
        axios.get(`${baseUrl}${id}`)
            //.then(res => console.log(res))
            .then(res => setDetail(res.data))
            //.then(() => console.log(detail.residents))
            .catch( err => console.error(err))
            //setTimeout(() => getCharacters(), 3000)
    }, )
    
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
                    <Box as="span" fontWeight="bold">Type:</Box>
                    {detail.type}
                </Text>
                <Text color="white">
                    <Box as="span" fontWeight="bold">Dimension:</Box>
                    {detail.dimension}
                </Text>
           </Box>
           <CharacterList characters={residents}/>
        </Flex>
        </>
    )
}

export default LocationDetail