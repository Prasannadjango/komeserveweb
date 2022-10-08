import React from "react";
import { Row, Col, Card, Container, Form ,Button} from "react-bootstrap";
import Header from "../Components/Header";
import { FiPhone, FiMail } from "react-icons/fi";
function Contactus() {
    return (
        <>
            <Header />

            <div className="Contactinfo_container">

                <Container>
                    <Row xl={2} xs={1}>
                        <Col >
                            <Card className='Count_Card py-4 bg-white border-0'>
                                <span className='About4  p-3'>
                                    <FiPhone />
                                </span>

                                <h3 className='fw-bold pt-4'>
                                    Ring us on
                                </h3>
                                <p className="px-4 text-secondary fs-5 pt-3">
                                    412-723-5750
                                </p>
                                <p className=" text-secondary fs-5 ">
                                    978-488-6321
                                </p>
                            </Card>

                        </Col>
                        <Col >
                            <Card className='Count_Card py-4 bg-white border-0'>
                                <span className='About2  p-3'>
                                    <FiMail />
                                </span>

                                <h3 className='fw-bold pt-4'>
                                    Mail-us
                                </h3>
                                <p className="px-4 text-secondary fs-5 pt-3">
                                    Contact@mail.com
                                    
                                </p>
                                <p className="px-4 text-secondary fs-5 ">
                                Support@mail.com
                                    
                                </p>
                                
                            </Card>

                        </Col>
                    </Row>
                     <div className="pt-5">
                     <h2 className="text-center display-6 fw-bold">Get in Touch</h2>
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
                            <Form.Label className="fw-bold fs-5">Address:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Address.." className="py-3" />
                        </div>
                        <div className="pt-3">
                        <Form.Label className="fw-bold fs-5">Comment:</Form.Label>
        <Form.Control as="textarea" rows={5} />
                        </div>
                        <Button className="py-3 fw-bold w-100 mt-4 fs-5" type='submit'>
                            Submit form
                        </Button>
                        </Form>
                     </div>
                     </div>
                </Container>
            </div>


        </>
    );
}

export default Contactus;
