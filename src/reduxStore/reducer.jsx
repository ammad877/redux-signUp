const INITIAL_STATE = {
    userData:{
        name:"",
        email:"",
        userId:""
    }
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOGIN_USER_DATA":
            return {...state,userData:{...state.userData,email:action.payload.email,userId:action.payload.uid}}
    }
    return state
}

export default reducer;