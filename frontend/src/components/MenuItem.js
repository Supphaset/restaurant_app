import React, {useState} from 'react'
import {Col, Row, InputGroup, FormControl, Button, Alert} from 'react-bootstrap'
import {addToOrder} from '../action/tableAction'
import { useDispatch } from 'react-redux'

const MenuItem = (props) => {
    const item = props.item
    const [qty, setQty] = useState(1)
    const [isOrder, setisOrder] = useState(false)
    const dispatch = useDispatch()
    const addOrderHandler = () =>{
        setisOrder(true)
        dispatch(addToOrder(item._id,qty))
        setTimeout(()=>{
            setisOrder(false)
        },300)
    }
    return (
        <Row key={item.name}>
            <Col md={7}>{item.name}</Col>
            <Col md={2}>฿{item.price}</Col>
            <Col md={3}>
                <InputGroup className="mb-3">
                    <FormControl type='number' value={qty} onChange={(e)=>setQty(e.target.value)}/>
                    <Button variant="outline-secondary" type='button' onClick={addOrderHandler}>
                    Add order
                    </Button>
                </InputGroup>
            </Col>
            {isOrder && <Alert variant='primary'>Item is added</Alert>}
        </Row>
    )
}

export default MenuItem
