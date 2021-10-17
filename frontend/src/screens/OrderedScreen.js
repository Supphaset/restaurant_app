import React from 'react'
import { Button, Col } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { clearOrder } from '../action/tableAction'


const OrderedScreen = () => {
    const table  = useSelector(state =>state.table.table)
    const dispatch = useDispatch()
    const clearOrderHandler = () => {
        dispatch(clearOrder(table._id))
    }
    return (
        <div>
            <h1>Ordered Screen</h1>
            {table.isOrder? table.order.map(order =>(
               <Col>{order.name} qty:{order.qty}</Col> 
            )):<h3>No order</h3>}
            {table.isOrder && (<>
                <h3>{table.order.reduce((acc,item) => acc + Number(item.qty),0)} Items ฿{table.order.reduce((acc,item)=>acc+item.qty*item.price,0)}</h3>
                </>
            )}

            <Button variant="outline-secondary" type='button' onClick={clearOrderHandler} disabled={!table.isOrder}>Clear</Button>
        </div>
    )
}

export default OrderedScreen
