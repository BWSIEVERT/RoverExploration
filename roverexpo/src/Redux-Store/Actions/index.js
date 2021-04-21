import axios from 'axios'
import moment from 'moment'

// Action Types
export const FETCH_PERSEVERANCE_START 
= 'FETCH_PERSEVERANCE_START';
export const FETCH_PERSEVERANCE_SUCCESS 
= 'FETCH_PERSEVERANCE_SUCCESS';
export const FETCH_CURIOSITY_START
= 'FETCH_CURIOSITY_START';
export const FETCH_CURIOSITY_SUCCESS
= 'FETCH_CURIOSITY_SUCCESS';

export const perseveranceAction = () => {

    const perseveranceDate = moment().subtract(2, 'days').format('YYYY-MM-DD')
    

    return (dispatch) => {
        dispatch({ type: FETCH_PERSEVERANCE_START })

        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=${perseveranceDate}&api_key=PeK7QWsdhQ8I7XRxcgjWXFJTbf5kPV0UgpYco21O`)
            .then((res) => {
                dispatch({ type: FETCH_PERSEVERANCE_SUCCESS, payload: res.data.photos})
            })
            .catch((error) => {
                console.log('FETCHING_PERSEVERANCE_? Error:', error)
            })
            }

}

export const curiosityAction = () => {

    const curiosityDate = moment().subtract(3, 'days').format('YYYY-MM-DD')

    return ( dispatch ) => {
        dispatch({ type: FETCH_CURIOSITY_START })

        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${curiosityDate}&api_key=PeK7QWsdhQ8I7XRxcgjWXFJTbf5kPV0UgpYco21O`)
            .then((res) => {
                dispatch({ type: FETCH_CURIOSITY_SUCCESS, payload: res.data.photos })
            })
    }
}
