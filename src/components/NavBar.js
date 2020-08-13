import React from 'react'
import { Link } from 'react-router-dom'
import {
  Flex, Image
} from '@chakra-ui/core'


function NavBar(){
    return(
        < Flex 
        pos="fixed"
            top={0}
            zIndex="99"
            backgroundColor="yankeesblue.100"
            w="100vw"
            h="10vh"
            p={0}
            align="center"
            justify="space-between"
            borderBottom="1px"
            borderRadius="md" 
            borderColor="footfeet.100"
        >
        
        <Link to={'/'}>

        <Flex justify="center" >
            <Image src="../rick_and_morty_logo.png"
            w="250px"
            p="55px 55px 55px 20px"
            objectFit="cover"
            />
            </Flex>
            </Link>
            <Flex 
                color="white"
                width="30vw"
                justify="space-around">
                <Link to={'/characters'}>Characters</Link>
                <Link to={'/episodes'}>Episodes</Link>
                <Link to={'/locations'}>Locations</Link>
            </Flex>
        </Flex>
    )
}

export default NavBar