import React from "react";
import { Row, Col, Card, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Signup() {
    return (
        <>
            <Header />

            <Container>

                <div className=" signup_container mb-5">
                    <h2 className="text-center display-6 fw-bold">Create an Account</h2>
                    <div className="contact_form p-4 mt-5">
                        <Form>
                            <div className="pt-3">
                                <Form.Label className="fw-bold fs-5">Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name.." className="py-3" />
                            </div>
                            <div className="pt-3">
                                <Form.Label className="fw-bold fs-5">Mobile Number:</Form.Label>
                                <Form.Control type="Number" placeholder="Enter Your Mobile Number.." className="py-3" />
                            </div>
                            <div className="pt-3">
                                <Form.Label className="fw-bold fs-5">Email-id:</Form.Label>
                                <Form.Control type="mail" placeholder="Enter Your Email-id.." className="py-3" />
                            </div>
                            <div className="pt-3">
                                <Form.Label className="fw-bold fs-5">Pincode:</Form.Label>
                                <Form.Control type="Number" placeholder="Enter Your pincode" className="py-3" />
                            </div>
                            
                            <Button className="py-3 fw-bold w-100 mt-4 fs-5" type='submit'>
                                Create Account
                            </Button>
                        </Form>
                        <div className="text-center pt-5">
                           <h5 > Already have an Account?</h5>
                           <h5>
                            <Link to='/Login' className="text-primary fw-bold text-decoration-none">Login</Link>
                           </h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Signup;