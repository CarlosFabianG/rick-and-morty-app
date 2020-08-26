import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import Characters from './pages/Characters'
import Locations from './pages/Locations'
import CharacterDetail from './pages/CharacterDetail'
import EpisodesDetail from './pages/EpisodesDetail'
import LocationDetail from  './pages/LocationDetail'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import NotFound from './components/NotFound'


function Router() {
    return(
        <BrowserRouter>
        <NavBar />  
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/episodes' component={Episodes}/>
            <Route exact path='/episodes/:id' component={EpisodesDetail}/>
            <Route exact path='/characters' component={Characters}/>
            <Route exact path='/characters/:id' component={CharacterDetail}/>
            <Route exact path='/locations' component={Locations}/>
            <Route exact path='/locations/:id' component={LocationDetail}/>
            <Route component={NotFound} />
        </Switch>
        < Footer /> 
        </BrowserRouter>
    )
}

export default Router;


