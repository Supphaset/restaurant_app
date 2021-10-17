import React, {useState} from 'react'
import { useSelector} from 'react-redux'
import { Button, Col, Row, Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeFromOrder, submitOrder } from '../action/tableAction'

const OrderScreen = () => {
    const table  = useSelector(state =>state.table.table)
    const order = useSelector(state =>state.table.order)
    const dispatch = useDispatch()
    const [isOrder, setisOrder] = useState(false)
    const orderHander = () =>{
        setisOrder(true)
        dispatch(submitOrder(table._id,order,table.order))
        setTimeout(() => {
            setisOrder(false)
        },1500)
    }
    return (
        <div>
            <h1>Cart {table.name}</h1>
            {isOrder && <Alert variant='primary'>Order is added</Alert>}
            {order.map(item =>(
                <Row className='my-3'>
                    <Col md={8}>{item.name}</Col>
                    <Col md={1}>฿{item.price}</Col>
                    <Col md={1}>qty:{item.qty}</Col>
                    <Col md={1}><Button className='btn-sm' type='button' variant='light' onClick={() => dispatch(removeFromOrder(item.name))}>delete</Button></Col>
                </Row>
            ))}
            {order.length>0 && (<>
                <h3>{order.reduce((acc,item) => acc + Number(item.qty),0)} Items ฿{order.reduce((acc,item)=>acc+item.qty*item.price,0)}</h3>
                <Button type='button' variant='light' onClick ={orderHander} className='my-5'>Order</Button>
                </>
            )}
            
        </div>
    )}

export default OrderScreen
