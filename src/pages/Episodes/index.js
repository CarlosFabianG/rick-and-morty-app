import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { Stack, Button, Spinner, Flex } from "@chakra-ui/core"
import EpisodeList from '../../components/EpisodeList'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'
import { connect } from 'react-redux'
import { getEpisodesAction } from '../../redux/episodesDuck'
const baseUrl = 'https://rickandmortyapi.com/api/'


const Episodes = ({episodes}) => {
    //const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(true)
   
/*
    const  getAllEpisodes = async () => {
        setLoading(false)
        const {data} = await axios.get(`${baseUrl}episode`)
        console.log(data) 
        setEpisodes(data.results) 
     }
     */

     const getEpisodes = () => {
        setLoading(false)
        getEpisodesAction()
     }
     useEffect(() => {
        getEpisodesAction(episodes)
     },[])
  
    return (
        <Stack
                w="100vw"
                bg="yankeesblue.100">
        <SearchBar />
        { loading && <Flex  mt="20vh" justify = "center"> 
            <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="footfeet.500"
            size="15vw"
           
            />
          </Flex> }
        <EpisodeList episodes={episodes}/>
        </Stack>
    )
    }
    
    const mapStateToProps = (state, props) => {
        return{
            episodes: state.episodes.array
        }
    }

export default connect(mapStateToProps, {getEpisodesAction})(Episodes)