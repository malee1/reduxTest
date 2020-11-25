/*
actions describe what will happen to state
here increment takes in an arg (which is then set as the payload)
*/
export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
