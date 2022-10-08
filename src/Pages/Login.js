import React, { useState } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Header";


function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header />

            <div className="Loginpage_container ">

               <div className="p-4 col-6">
               <h1 className="text-center text-primary fw-bold">Login</h1>
                <Form >
                    <Form.Label className="fw-bold">Phone-Number</Form.Label>
                    <Form.Control type="Number" placeholder="Enter your Mobile Number" className="px-2 py-3" />
                    <Button variant="primary" className='px-2 py-3 w-100 mt-4 fs-5 fw-bold' onClick={handleShow}>
                        Generate OTP
                    </Button>
                </Form>
                <div className="pt-4 text-center">
                    <h6>Don't have an Account?</h6>
                    <h6 className="fw-bold text-primary">
                        <Link to='/Signup' className="text-primary fw-bold text-decoration-none">Create one</Link>
                        </h6>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter OTP </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >

                            <Form.Control type="Number" placeholder="Enter the OTP" className="px-2 py-3" />
                            <Button variant="primary" type='submit' className='px-2 py-3 w-100 mt-4 fs-5 fw-bold'>
                                submit
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>

               </div>
            </div>

        </>
    );
}

export default Login;