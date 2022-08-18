//cada reducers tiene su propio state

const initialState = {
    clientes: [],
    error: false,
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}