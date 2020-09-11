import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const reducers = combineReducers({
    
})

const initialState = {
    recentCharacters: [],
    recentEpisodes: []
}

export const store = createStore(
                    reducers, 
                    composeEnhancers(
                        applyMiddleware(thunk)
                        )
                    )
