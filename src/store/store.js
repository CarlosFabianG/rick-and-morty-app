import { createStore } from 'redux'
import { combineReducers } from 'redux'

export const reducers = combineReducers({
    
})

const initialState = {
    recentCharacters: [],
    recentEpisodes: []
}

export const store = createStore(reducers, initialState)