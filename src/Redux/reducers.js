const myStore = {
    angka: 0
}

const myReducer = (state = {...myStore}, action) => {
    switch(action.type){
        case('INCREMENT'):
            return({
                ...state,
                angka: state.angka += 1
            })
        case('DECREMENT'):
            return({
                ...state,
                angka: state.angka -= action.payloadsx
            })
        case('ADD_USER'):
            return({
                ...state,
                dataOrang: action.payloadsx                
            })
        default:
            return state
    }
}

export default myReducer