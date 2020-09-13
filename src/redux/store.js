import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { charsReducer, getCharactersAction } from './charsDuck'
import { episodesReducer } from './episodesDuck'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const reducers = combineReducers({
    characters: charsReducer,
    episodes: episodesReducer
})

/*
export const store = createStore(
        reducers, 
        composeEnhancers(
            applyMiddleware(thunk)
            )
        )
        */

export default function generateStore() {
    const store = createStore(
        reducers, 
        composeEnhancers(
            applyMiddleware(thunk)
            )
        )
        getCharactersAction()(store.dispatch, store.getState)
        return store
}
        
     
