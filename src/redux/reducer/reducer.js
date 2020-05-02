export const saveOperation = (state,action) => ({
    ...state,
    operation: state.operation.concat(action.operation)
})

export const calculate = (state,action)=>({
    ...state,
    result: action.result
})