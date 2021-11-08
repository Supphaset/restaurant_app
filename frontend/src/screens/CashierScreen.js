import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import { Row,Card,ListGroup, Col } from 'react-bootstrap'

const CashierScreen = () => {
    const [tables, settable] = useState([])
    useEffect(() => {
        const fetchData = async() =>{
            const {data} = await axios.get('/api/tables/cashier')
            data.map((table) =>{
            let tempname = []
                table.order.map((item,i) =>{
                    if(tempname.includes(item.name)){
                        let j = tempname.indexOf(item.name)
                        table.order[j].qty += item.qty
                        table.order.splice(i,1)
                    }else{
                        tempname.push(item.name)
                    }return item
                })
                return table
            })
            settable(data)
        }
        fetchData()
        
    },[tables])
    return (
        <div>
            <h1>CashierScreen</h1>
            {tables.map(table =>(
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
            ))}
        </div>
    )
}

export default CashierScreen
