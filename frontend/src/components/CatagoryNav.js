import React from 'react'
import { Nav } from 'react-bootstrap'

const CatagoryNav = (props) => {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey='1' onSelect={(selectedKey) => props.setCat(selectedKey)}>
            <Nav.Item>
                <Nav.Link eventKey="1">Recommend</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2">Deep fired</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3">Stir</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="4">Yum</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="5">Soup</Nav.Link>
            </Nav.Item>
            </Nav>
        </div>
    )
}

export default CatagoryNav
