import React from 'react'
import { Row, Col } from 'react-bootstrap'
import TableZone from '../components/TableZone'


const TableScreen = () => {
    return(
        <>
            <h1>Table</h1>
            <>
            <Row>
                <Col md={12} lg={6}><TableZone zone={"1"} /></Col>
                <Col md={12} lg={6}><TableZone zone={"2"} /></Col>
            </Row>
            <Row>
                <Col md={12} lg={6}><TableZone zone={"3"} /></Col>
                <Col md={12} lg={6}><TableZone zone={"vip"} /></Col>
            </Row>
            </>
        </>
    )
    // return (
    //     <>
    //         <h1>Table</h1>
    //         <Row>
    //             <Col sm={12} md={6} >
    //                 <Card className='my-3 p-3 rounded'>
    //                     <Card.Body>
    //                         <Card.Title>Zone 1</Card.Title>
    //                         <ListGroup variant='flush'>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 11')))}>Table 1</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 12')))}>Table 2</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 13')))}>Table 3</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 14')))}>Table 4</ListGroup.Item>
    //                         </ListGroup>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //             <Col sm={12} md={6} >
    //                 <Card className='my-3 p-3 rounded'>
    //                     <Card.Body>
    //                         <Card.Title>Zone 2</Card.Title>
    //                         <ListGroup variant='flush'>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 21')))}>Table 1</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 22')))}>Table 2</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 23')))}>Table 3</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 24')))}>Table 4</ListGroup.Item>
    //                         </ListGroup>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col sm={12} md={6} >
    //                 <Card className='my-3 p-3 rounded'>
    //                     <Card.Body>
    //                         <Card.Title>Zone 3</Card.Title>
    //                         <ListGroup variant='flush'>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 31')))}>Table 1</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 32')))}>Table 2</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 33')))}>Table 3</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('table 34')))}>Table 4</ListGroup.Item>
    //                         </ListGroup>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //             <Col sm={12} md={6} >
    //                 <Card className='my-3 p-3 rounded'>
    //                     <Card.Body>
    //                         <Card.Title>VIP</Card.Title>
    //                         <ListGroup variant='flush'>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('Vip 1')))}>VIP 1</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('Vip 2')))}>VIP 2</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('Vip 3')))}>VIP 3</ListGroup.Item>
    //                             <ListGroup.Item onClick={()=> dispatch((selectTable('Vip 4')))}>VIP 4</ListGroup.Item>
    //                         </ListGroup>
    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //         </Row>
    //     </>
    // )
}

export default TableScreen
