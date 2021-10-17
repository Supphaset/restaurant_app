

export const tableReducer = (state = { table:'None',order:[]},action)=>{
    switch(action.type){
        case 'SELECT_TABLE':

            return { table:action.payload.table, order:action.payload.order}
        case 'ADD_ORDER':
            const order = action.payload.order
            const existorder = state.order.find(x => x.name === order.name)
            if(existorder){
                return{
                    ...state,
                    order: state.order.map(x => x.name === existorder.name ? order : x)
                }
            }else{
                return {...state, order:[...state.order,action.payload.order]}
            }
        case 'REMOVE_ORDER':
            return{
                ...state,
                order: state.order.filter(x => x.name !== action.payload)
            }
        case 'SUBMIT_ORDER':
            return{
                table:action.payload.table,
                order:[]
            }
        case 'CLEAR_ORDER':
            return{
                ...state,
                table:action.payload.table
            }
        default:

            return state
    }
}