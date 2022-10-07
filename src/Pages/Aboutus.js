import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../Components/Header";
import Aboutimg from '../Assests/Images/Bannerimage.jpg';
import { MdDesignServices ,MdThumbUpAlt} from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
function Aboutus() {
    return (
        <>
            <Header />

            <div className="Aboutus_container">
                <Container>
                    <Row xl={2} xs={1}>
                        <Col>
                            <img src={Aboutimg} className='w-100' />
                        </Col>
                        <Col>
                            <div className="ps-5">
                                <h2 className="display-6 fw-bold">Know About us</h2>
                                <p className="text-secondary fs-6 pt-3 lh-lg">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <h1 className="fw-bold text-center display-6 py-5">
                    Why to Choose us?
                </h1>
                <div className="Aboutus_cardscontainer mb-5">
                    <Container>
                        <div className='Count_Cardcontainer py-5'>
                            <Row xl={3} xs={1} >
                                <Col >
                                    <Card className='Count_Card py-4 bg-white border-0'>
                                        <span className='About1  p-3'>
                                            <MdDesignServices />
                                        </span>

                                        <h3 className='fw-bold pt-4'>
                                            Service Commitment
                                        </h3>
                                        <p className="px-4 text-secondary lh-lg pt-3">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                                        </p>
                                    </Card>

                                </Col>
                                <Col >
                                    <Card className='Count_Card py-4 bg-white border-0'>
                                        <span className='About2  p-3'>
                                            <MdThumbUpAlt />
                                        </span>

                                        <h3 className='fw-bold pt-4'>
                                            Top Level Experience
                                        </h3>
                                        <p className="px-4 text-secondary lh-lg pt-3">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                                        </p>
                                    </Card>

                                </Col>
                                <Col >
                                    <Card className='Count_Card py-4 bg-white border-0'>
                                        <span className='About3  p-3'>
                                            <AiOutlineSafety/>
                                        </span>

                                        <h3 className='fw-bold pt-4'>
                                            Safety Concern
                                        </h3>
                                        <p className="px-4 text-secondary lh-lg pt-3">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                                        </p>
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

export default Aboutus;
