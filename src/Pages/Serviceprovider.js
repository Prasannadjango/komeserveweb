import React from "react";
import { Button, Form } from "react-bootstrap";

import Header from "../Components/Header";
function Serviceprovider() {
    return (
        <>
            <Header />
            <div className="ServiceProvider_container">
                <div className="Serviceprovider_form col-8 p-4">
                    <h3 className="text-center fw-bold display-6 pt-4">Become a Service-Provider</h3>
                    <Form className="pt-4">
                        <div>
                        <Form.Label className="fw-bold fs-5">User Photo:</Form.Label>
                        <Form.Control type="file" placeholder="No file chosen" />
                        </div>
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
                            <Form.Label className="fw-bold fs-5">Pin-code:</Form.Label>
                            <Form.Control type="Number" placeholder="Enter Your Pincode.." className="py-3" />
                        </div>
                        <div className="pt-3">
                        <Form.Label className="fw-bold fs-5">Aadhar Front-side:</Form.Label>
                        <Form.Control type="file" placeholder="No file chosen" />
                        </div>
                        <div className="pt-3">
                        <Form.Label className="fw-bold fs-5">Aadhar Back-side:</Form.Label>
                        <Form.Control type="file" placeholder="No file chosen" />
                        </div>

                        <Button className="py-3 fw-bold w-100 mt-4 fs-5" type='submit'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

        </>
    );
}

export default Serviceprovider;