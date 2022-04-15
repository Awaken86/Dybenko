import React from 'react';
import { Carousel, Col, Container, Row } from "react-bootstrap";
import srcDimic from '../../ComItems/img/527bd42276ededf6.png';
import agenttainiy from '../../ComItems/img/agenttainiy.png';
import apravoslavno from '../../ComItems/img/pravoslavno.png';
import './Karysel.module.css';

const Karysel = () => {
    return (
        <Container style={{ paddingTop: '60px' }}>
            <Row>
                <Col>
                    <Carousel controls={true} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src='https://media.discordapp.net/attachments/928675199484821544/942541442457403493/unknown.png?width=1216&height=684'
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={srcDimic}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={agenttainiy}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={apravoslavno}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default Karysel;