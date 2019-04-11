import Axios from 'axios'

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(addUserStarted())

        return Axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            dispatch(addUserToReducer(response.data.results))
        })
    }
}

export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = (payloadsx) => ({
    type: 'DECREMENT',
    payloadsx
})

const addUserToReducer = (data) => ({
    type: 'ADD_USER',
    payloadsx: data
})

const addUserStarted = () => ({
    type: 'ADD_USER_STARTED'
})