import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { selectTable } from '../action/tableAction'


const TableZone = (props) => {
    const dispatch = useDispatch()
    const [tables, settables] = useState([])
    useEffect(() => {
        const fetchData = async() =>{
            const {data} = await axios.get(`/api/tables/zone/${props.zone}`)
            settables(data)
        }
        fetchData()
    },[props])
    
    return (
        <>
        <Row>
                <Col >
                        <Card className='my-3 p-3 rounded'>
                            <Card.Body>
                                <Card.Title>Zone {props.zone}</Card.Title>
                                <ListGroup variant='flush'>
                                    {tables.sort().map(table =>(
                                        <ListGroup.Item style={{color:table.isOrder ? 'blue' :'black'}} onClick={()=> dispatch((selectTable(table._id)))}>{table.name}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
            
        </>
    )
}

export default TableZone
