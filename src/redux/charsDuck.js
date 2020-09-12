import axios from 'axios'
const URL = 'https://rickandmortyapi.com/api/character'

//consts
const GET_CHARACTERS = 'GET_CHARACTERS'
const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR'
const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCES'


const initialState = {
    loading: false,
    array: []
}


//reducer 
export const charsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                loading: true
            }
        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                array: action.payload
            }
        default:
            return state
    }
}

//action creators
export const getCharactersAction = () => (dispatch, getState) => {
        dispatch({
        type: GET_CHARACTERS
        })
        return axios.get(URL)
          .then(res => {
              dispatch({
                  type: GET_CHARACTERS_SUCCESS,
                  payload: res.data.results
              })
          }).catch(err => {
            console.log(err)
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: err.response.message
            })
          })
    }