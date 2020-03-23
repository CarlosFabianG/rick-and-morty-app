import React, { Component } from 'react';
import { Stack } from "@chakra-ui/core";
import SearchBar from '../../components/SearchBar';

class Home extends Component{
    state = [];

    render(){
return (
    <>
< SearchBar />
<Stack 
w="100vw"
h="100vh"
bg="yankeesblue.100"
>
    Home
</Stack>
</>
)
    }
}

export default Home