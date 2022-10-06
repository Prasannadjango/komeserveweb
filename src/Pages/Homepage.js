import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import Bannerimg from '../Assests/Images/bannerimage2.jpg';
import { MdShareLocation, MdDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
function Homepage() {
    return (
        <>
            <Header />
            <div className='Homepage_container '>
                {/* Banner section */}
                <div className='d-flex Banner_Container mb-5'>
                    <Col xl={6} className='p-5'>
                        <h1 className='display-5 fw-bold text-primary'>
                            Find the Best services
                        </h1>
                        <h1 className='display-5 fw-bold lh-sm'>
                            Near to you from anywhere,anytime
                        </h1>


                        <div className='Banner_form d-flex col-xl-12 mt-5'>
                            <Form.Control type="text" placeholder="Search by Location.." className='border-0' />
                            <Button>Search</Button>
                        </div>

                    </Col>
                    <Col xl={6} className='p-5'>
                        <img src={Bannerimg} className='w-100 h-100' />
                    </Col>
                </div>
                {/* Counter Box section  */}
                <div className='CountCard_maincontainer py-5 mb-5'>
                    <Container>
                        <div className='Count_Cardcontainer '>
                            <Row xl={3} xs={1} >
                                <Col >
                                    <Card className='Count_Card py-4 bg-white border-0'>
                                        <span className='bg-primary  p-3'>
                                            <MdShareLocation />
                                        </span>
                                        <h1 className='fw-bolder display-4 pt-4 text-primary'>100+</h1>
                                        <h3 className='fw-bold pt-4'>
                                            Service Locations
                                        </h3>
                                    </Card>

                                </Col>
                                <Col>
                                    <Card className='Count_Card py-4 bg-white border-0 '>
                                        <span className='bg-primary  p-3'>
                                            <MdDesignServices />
                                        </span>
                                        <h1 className='fw-bolder display-4 pt-4 text-primary'>50+</h1>
                                        <h3 className='fw-bold pt-4'>
                                            Service Categories
                                        </h3>
                                    </Card>

                                </Col>
                                <Col >
                                    <Card className='Count_Card py-4 bg-white border-0'>
                                        <span className='bg-primary  p-3'>
                                            <FaHandshake />
                                        </span>
                                        <h1 className='fw-bolder display-4 pt-4 text-primary'>1000+</h1>
                                        <h3 className='fw-bold pt-4'>
                                            Satisified Customer
                                        </h3>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                {/* Category Section */}
                <div className='Category_maincontainer'>
                      
                </div>
            </div>
        </>
    );
}

export default Homepage;
