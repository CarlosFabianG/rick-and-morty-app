import React, { Component } from 'react'
import { Stack, Badge, Image, Flex, Text, Box } from "@chakra-ui/core"
import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/'


class CharacterDetail extends Component {
    state = {
        characterInfo :{
       origin: [],
       location: [],
       episode: []
        },
        episodeinfo: []
    }


    async getCharacterInfo(){
        const {id} = this.props.match.params
        const data = await axios.get(`${baseUrl}character/${id}`)
       
        console.log(data)
        this.setState( {characterInfo: data.data} )
        console.log(this.state.characterInfo.episode)
       
    }

    componentDidMount(){
        this.getCharacterInfo()
    }

     

    render(){
        
        return(
            <Stack 
            w="100vw"
            h="100vh"
            bg="yankeesblue.100"
            >
            <Flex ml="10vw" mt="20vh">
                <Flex wrap="wrap">
                <Image
                src={this.state.characterInfo.image}
                border="1px"
                borderColor="footfeet.100"/>
            </Flex>
            <Flex direction="column" ml="3vw">
                <Text color="white">
                    <Box as="span" fontWeight="bold">Name:</Box> {this.state.characterInfo.name}
                </Text>
                <Text color="white">
                    <Box as="span" fontWeight="bold">Species:</Box> {this.state.characterInfo.species}
                </Text>
                <Text color="white">
                    <Box as="span" fontWeight="bold">Gender:</Box> {this.state.characterInfo.gender}
                </Text>
                <Text color="white">
                    <Box as="span" fontWeight="bold">Origin:</Box> {this.state.characterInfo.origin.name}
                </Text>
                <Text color="white">
                    <Box as="span" fontWeight="bold">Location:</Box> {this.state.characterInfo.location.name}
                </Text>
                <Text color="gray.500">
                    <Box as="span" fontWeight="bold">Nº episodes:</Box> {this.state.characterInfo.episode.length}
                </Text>
                    <Badge rounded="full" px="2" variantColor="teal">
                        Status: {this.state.characterInfo.status}
                    </Badge>
            </Flex>
         </Flex>
        </Stack>
        )

    }
}

export default CharacterDetail