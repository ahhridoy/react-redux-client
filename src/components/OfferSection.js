import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import side_banner from "../images/side-banner.jpg";

const OfferSection = () => {
    return (
        <Container className="mt-5 bg-light p-5">
            <h1 className="fw-bold text-center">Best Offer</h1>
            <Row>
                <Col md={4} xs={12}>
                    {/* <div className="p-3 bg-light text-center"> */}
                    <img src={side_banner} alt="side-banner" />
                    {/* </div> */}
                </Col>
                <Col md={8} xs={12} className="mt-4">
                    <p className="fs-4">
                        Cameras, especially digital cameras, have become the
                        rage in recent times. Most of the photography
                        enthusiasts have armed themselves with dslr camera
                        recently from brands like Canon, Nikon, Sony, GoPro
                        cameras and are travelling to picturesque locations to
                        capture stunning moments and convert them into
                        photographic images. Although point and shoot cameras
                        from Kodak and Sony are the still the preferred version
                        of many expert photographers, digital cameras are the
                        ones that have expanded the possibilities of
                        experimenting with different styles of photography and
                        help amateurs to click good pictures. Camera bags,
                        tripods and lenses are significant accessories that
                        photographers need to carry with them always.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default OfferSection;
