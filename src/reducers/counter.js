//reducer takes 2 x args, initial state and an action
//reducer then switches on action type
//return value is the updated state
//default should return the state unchanged
//if the action defines a payload it can be accessed here via action.payload
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state -1
        default:
            return state
    }
}

export default counterReducer;