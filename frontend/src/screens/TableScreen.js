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
}

export default TableScreen
