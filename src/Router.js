import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import NotFound from './components/NotFound'


function Router() {
    return(
        <BrowserRouter>
        <NavBar />  
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route component={NotFound} />
        </Switch>
        < Footer /> 
        </BrowserRouter>
    )
}

export default Router;


