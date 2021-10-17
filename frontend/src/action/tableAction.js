import axios from 'axios'

export const addToOrder = (id,qty) =>async (dispatch) =>{
    const {data} = await axios.get(`/api/menus/id/${id}`)
    dispatch({
        type: 'ADD_ORDER',
        payload:{order:{
            name: data.name,
            price: data.price,
            qty:qty,
            menu:data
        }}
    })
}

export const selectTable = (id) => async (disptch) =>{
    const {data} = await axios.get(`/api/tables/id/${id}`)
    disptch({
        type: 'SELECT_TABLE',
        payload: {table:data,order:[]}
    })
}

export const removeFromOrder = (name) =>async(dispatch)=>{
    dispatch({
        type: 'REMOVE_ORDER',
        payload: name
    })
}

export const submitOrder = (id,neworder,oldorder) => async(dispatch)=>{
    const order = [...oldorder,...neworder]
    try{
        const {data} = await axios.put(`api/tables/update/${id}`,order)
        dispatch({
        type: 'SUBMIT_ORDER',
        payload: {table:data,order:[]}
    })
    }catch(error){
        console.log(error)
    }
}

export const clearOrder = (id) => async(dispatch) =>{
    const {data} = await axios.put(`api/tables/clear/${id}`)
    dispatch({
        type: 'CLEAR_ORDER',
        payload:{ table:data}
    })
}

export const tableList = (zone) => async(dispatch)=>{
    try{
        const {data} = await axios.get(`api/tables/${zone}`)
        dispatch({
            type: 'TABLE_ZONE',
            payload: data
        })
    }catch(error){
        console.log(error)
        dispatch({
            type: 'ERROR',
            payload: 'Error'
        })
    }
}