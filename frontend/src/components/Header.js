import React from 'react'
import {useSelector} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useLocation } from 'react-router'

const Header = () => {
    const location = useLocation().pathname
    const table  = useSelector(state =>state.table)
    const curTable = table.table.name
    if(location === '/cashier' || location === '/check'){
        return(
            <header>
                <Navbar bg="light" variant="light">
                    <Container>
                        <LinkContainer to="/cashier">
                            <Navbar.Brand>Cashier</Navbar.Brand>
                        </LinkContainer>
                        <Nav className="ml-auto">
                            <LinkContainer to='/check'>
                                <Nav.Link>Check</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        )
    }else{
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
                                <Nav.Link>{curTable}</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default Header
