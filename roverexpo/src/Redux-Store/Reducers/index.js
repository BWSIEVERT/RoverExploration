

//Action Imports for State Management
import { 
    FETCH_PERSEVERANCE_START, 
    FETCH_PERSEVERANCE_SUCCESS,
    FETCH_CURIOSITY_START,
    FETCH_CURIOSITY_SUCCESS


} from '../Actions'


const initialState = {
    isLoading: false,
    photoData: [],
}


export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PERSEVERANCE_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PERSEVERANCE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                photoData: action.payload
            }
        case FETCH_CURIOSITY_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CURIOSITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                photoData: action.payload
            }
        default:
            return state
    }
}
