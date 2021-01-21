const initialState = {
    email: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{
    if(action.type === 'SET_EMAIL'){
        return {...state, emal: action.payload.email}
    }
    
    return state
}