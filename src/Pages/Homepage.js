import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import Bannerimg from '../Assests/Images/bannerimage2.jpg';
import { MdShareLocation, MdDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import Painting from '../Assests/Images/painting.jpg';
import electrician from '../Assests/Images/electric.jpg';
import Plumbing from '../Assests/Images/plumbing.jpg';
import cardwash from '../Assests/Images/carwashing.jpg';
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
                    <Container>
                        <div className='Heading d-flex position-relative'>
                            <div>
                                <h2 className='fw-bolder'>Browse By Category</h2>
                            </div>
                            <h6 className='fw-bold text-primary'>View all</h6>
                        </div>
                        <div>
                            <Row xl={4} xs={1} className="pt-5">
                                <Col >
                                    <Card className='bg-white border-0'>
                                        <Card.Img variant="top" src={Painting} />
                                        <Card.Body >
                                            <Card.Title className='fw-bold text-start'>Painting services</Card.Title>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col >
                                    <Card className='bg-white border-0'>
                                        <Card.Img variant="top" src={electrician} />
                                        <Card.Body >
                                            <Card.Title className='fw-bold text-start'>Electrician services</Card.Title>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col >
                                    <Card className='bg-white border-0'>
                                        <Card.Img variant="top" src={Plumbing} />
                                        <Card.Body >
                                            <Card.Title className='fw-bold text-start'>plumbing</Card.Title>
                                        </Card.Body>
                                    </Card>

                                </Col>
                                <Col >
                                    <Card className='bg-white border-0'>
                                        <Card.Img variant="top" src={cardwash} />
                                        <Card.Body >
                                            <Card.Title className='fw-bold text-start'>Car services</Card.Title>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Homepage;
