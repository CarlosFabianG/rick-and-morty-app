import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { charsReducer, getCharactersAction } from './charsDuck'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const reducers = combineReducers({
    characters: charsReducer
})

export const generateStore = () => {
    const store = createStore(
        reducers, 
        composeEnhancers(
            applyMiddleware(thunk)
            )
        )
        getCharactersAction()(store.dispatch)
        return store
}
