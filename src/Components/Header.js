import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from '../Assests/Images/logo.png';
function Header() {
    return (
        <>
            <Navbar bg="white" expand="lg" className="p-3 Header_nav">

                <Navbar.Brand href="#home" className="Logo">
                    <img src={logo} className='w-100 h-100' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto Header_links">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#home">Ks-safe</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">Become a Service-Provider</Nav.Link>
                        <Nav.Link href="#link">
                            <Button>Login</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>


        </>
    );
}
export default Header;