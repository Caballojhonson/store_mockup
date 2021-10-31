import React, {useState} from 'react'
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'
import CartOverview from './CartOverview'

export default function Header(props) {
    const [cartIsHidden, setCartIsHidden] = useState(true)

    const toggleHidden = () => setCartIsHidden(prev => !prev)

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
                <i className="navbar__cart bi bi-cart" onClick={toggleHidden}>
                {props.totalItems ? <div className="navbar__cartnum">{props.totalItems}</div> : null}
                </i>
                {cartIsHidden ? null :
                 <CartOverview 
                 cartItems={props.cartItems}
                 totalPrice={props.totalPrice}
                 totalItems={props.totalItems}
                 removeItem={props.removeItem}
                />}
            </Container>
        </Navbar>
    )
}

