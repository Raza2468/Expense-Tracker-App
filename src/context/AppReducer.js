
export default (state, action) => {
    switch (action.type) {
        case "DELET_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
            }
        case "ADD_TRANSCATION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        default:
            return state;
    }
}

// const initialState = {

// }

// export default (state = initialState, { type, payload }) => {
//     switch (type) {

//     case typeName:
//         return { ...state, ...payload }

//     default:
//         return state
//     }
// }
