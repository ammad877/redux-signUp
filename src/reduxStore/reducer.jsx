const INITIAL_STATE = {
    email : "",
    password : ""
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "UPDATE_USER_DATA":
            console.log(action , 'action')
        return {...state}
    }
}

export default reducer;