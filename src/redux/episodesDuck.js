import axios from 'axios'

//consts
const GET_EPISODES = 'GET_EPISODES'
const GET_EPISODES_ERROR = 'GET_EPISODES_ERROR'
const GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS'

const URL = 'https://rickandmortyapi.com/api/episode'

const initialState = {
    loading: false,
    array: []
}

//reducer
export const episodesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EPISODES:
            return {
                loading: true,
            }
        case GET_EPISODES_SUCCESS:
            return {
                ...state,
                array: action.payload
            }
        default: 
          return state
    }
}


//action creator
export const getEpisodesAction = () => (dispatch, getState) => {
    dispatch({
        type: GET_EPISODES,
        loading: true
    })
    return axios.get(URL)
       .then(res => {
           dispatch({
               type: GET_EPISODES_SUCCESS,
               loading: false,
               payload: res.data.results
           })
       }).catch(err => dispatch({
           loading: false,
           payload: err
           
       }))
}