import React from 'react'
import {useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    const table  = useSelector(state =>state.table)
    const curTable = table.table.name
    return (
        <header>
            <Navbar bg="light" variant="light">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Table</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto">
                        <LinkContainer to='/menu'>
                            <Nav.Link>Menu</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <Nav.Link>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/order'>
                            <Nav.Link>Order</Nav.Link>
                        </LinkContainer>
                        <div >{curTable}</div>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
