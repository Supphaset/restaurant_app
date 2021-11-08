import React from 'react'
import { Button, Col, Row, Card, ListGroup } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { checkOrder } from '../action/tableAction'

const OrderedScreen = () => {
    const table  = useSelector(state =>state.table.table)
    const dispatch = useDispatch()
    const checkOrderHandler = () => {
        dispatch(checkOrder(table._id))  
    }
    return (
        <div>
            <h1>Ordered Screen</h1>
            {table.isOrder? 
                <Row>
                    <Card className='my-3 p-3 rounded'>
                            <Card.Body>
                                <Card.Title>Table: {table.name}</Card.Title>
                                <ListGroup variant='flush'>
                                    {table.order.sort().map(order =>(
                                        <ListGroup.Item >
                                            <Row>
                                                <Col md={8}>
                                                    {order.name}
                                                </Col>
                                                <Col md={2}>
                                                    X{order.qty}
                                                </Col>
                                                <Col md={2}> 
                                                    ฿{order.price}
                                                </Col>
                                            </Row>
                                            </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                <ListGroup>
                                    <h3>{table.order.reduce((acc,item) => acc + Number(item.qty),0)} Items ฿{table.order.reduce((acc,item)=>acc+item.qty*item.price,0)}</h3>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                </Row> 
            :<h3>No order</h3>}

            <Button variant="outline-secondary" type='button' onClick={checkOrderHandler} disabled={!table.isOrder}>Bill</Button>
        </div>
    )
}

export default OrderedScreen
