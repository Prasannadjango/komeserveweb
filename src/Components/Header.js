import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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

                        <Nav.Link href="#home">
                            <Link to='/' className="text-secondary text-decoration-none">Home</Link>
                        </Nav.Link>


                        <Nav.Link href="#link">
                            <Link to='/Aboutus' className="text-secondary text-decoration-none">About-us</Link>
                        </Nav.Link>
                        <Nav.Link href="#home">Ks-safe</Nav.Link>
                        <Nav.Link href="#link">
                            <Link to='/Contactus' className="text-secondary text-decoration-none">Contact</Link>
                               
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <Link to='/Serviceprovider' className="text-secondary text-decoration-none">Become a Serviceprovider</Link>
                             
                            </Nav.Link>
                        <Nav.Link href="#link">
                            <Link to='/Login'>
                                <Button className='fw-bold px-5 py-3 fs-6'>
                                    Login
                                </Button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>


        </>
    );
}
export default Header;