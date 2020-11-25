//reducer takes 2 x args, initial state and an action
//reducer then switches on action type
//return value is the updated state
//default should return the state unchanged
const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN IN':
            return !state
        default:
            return state
    }
}

export default loggedReducer;