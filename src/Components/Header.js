import React from 'react'
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar className="navbar" bg="light" variant="light" sticky="top" >
            <Navbar.Brand>  
                  <i className="navbar__logo bi bi-tropical-storm"></i>
            </Navbar.Brand>
            <Container className="navbar__navlinks">
                <Nav className="navbar__navlinks">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/store">Store</Nav.Link>
                </Nav>
            </Container>
            <Container>
            <i className="navbar__cart bi bi-cart">
            <div className="navbar__cartnum">3</div>
            </i>
            
            </Container>
        </Navbar>
    )
}

