const ADD_CHARACTERS = 'ADD_CHARACTERS'


const initialState = {
    characters: []
}

export const charsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD:
            return {
                data: action.type
            }
        default:
            return defaultState
    }
}