import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { Stack, Flex, Button, Spinner, Text } from "@chakra-ui/core"
import CharacterList from '../../components/CharacterList'
import SearchBar from '../../components/SearchBar'
import axios from 'axios'
const baseUrl= 'https://rickandmortyapi.com/api/'



class Characters extends Component{
  state={
      page: 0,
      nextPage: 1,
      prevPage: 0,
      loading: true,
      allCharacters: {
        info: {
           prev: null,
        },
        results:[]
      }
  }

  componentDidMount(){
this.getAllCharacters()
  }

  async getAllCharacters(){
      this.setState({loading: true})
      const data = await axios.get(`${baseUrl}character?page=${this.state.nextPage}`)
      console.log(data)
      this.setState({allCharacters: data.data, 
                     loading:false,
                     page: this.state.page + 1,
                     nextPage: this.state.nextPage + 1,
                     prevPage: this.state.prevPage + 1
                    })
  }

  async previousPage(){
    this.setState({loading: true})
      const data = await axios.get(`${baseUrl}character?page=${this.state.prevPage}`)
      this.setState({allCharacters: data.data, 
                     loading:false,
                     page: this.state.page - 1,
                     nextPage: this.state.nextPage + 1,
                     prevPage: this.state.prevPage - 1
                    })
  }

    render(){

      return(
        <Stack 
            w="100vw"
            bg="yankeesblue.100"
            >
              < SearchBar />
              {this.state.loading &&(
                <Flex  mt="20vh" justify = "center"> 
                < Spinner 
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="15vw"
                />
              </Flex>
              )}
            < CharacterList characters={this.state.allCharacters.results}/>
            <Flex  justify="center">
              {this.state.page > 1 &&(
                <Button w="10vw" 
                marginBottom="50px" 
                variantColor="teal" 
                variant="outline"
                onClick= {() => this.previousPage()}>
           Previous page
        </Button>
              )}
             <Button w="10vw" 
                     marginBottom="50px" 
                     variantColor="teal" 
                     variant="outline"
                     onClick= {() => this.getAllCharacters()}>
                Next page
             </Button>
              <Text color="white">{this.state.page}/25</Text>
           </Flex>
        </Stack>
        )
 
    }
}

export default Characters