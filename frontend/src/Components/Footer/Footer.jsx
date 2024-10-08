import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { CgPhone } from 'react-icons/cg';
import { GrYoutube } from "react-icons/gr";
import style from './Footer.module.css'


const Footer = () => {
    return (
        <Nav >
            <Container  style={{ backgroudColor: '#fff', marginTop: '50px', marginBottom: '30px' }}>
                <Row>
                    <Col>
                        <Card border="light" className={style.card} style={{backgroundColor: "#343B41"}}>
                            <Card.Body>
                                <Card.Title>Доставка</Card.Title>
                                <ul className="list-unstyled">
                                    <li> <Nav.Link className={style.li} href="#"> Доставка по России</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="#"> Доставка в страны СНГ</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="#"> Условия доставки</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="#"> Доставка стронними </Nav.Link></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" className={style.card} style={{backgroundColor: "#343B41"}}>
                            <Card.Body>
                                <Card.Title>О нас</Card.Title>
                                <ul className="list-unstyled">
                                    <li> <Nav.Link className={style.li} href="#"> Вакансии</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="#"> Сертификаты Shota u Ashota</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="#"> Стать спонсором</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="#"> Условия оферы</Nav.Link></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" className={style.card} style={{backgroundColor: "#343B41"}}>
                            <Card.Body>
                                <Card.Title>Обратная связь</Card.Title>
                                <Nav as='ul' className="list-unstyled">
                                    <Nav as='li' > <Nav.Link className={style.li} href="#"> Ответы на часто задаваемые вопросы</Nav.Link></Nav>
                                    <li> <Nav.Link className={style.li} href="#"> Служба поддержки</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="tel:+79775415100"> <CgPhone size={20} /> +7-977-541-51-00</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="https://www.youtube.com/watch?v=fp5-XQFr_nk&t=0s&ab_channel=%D0%A5%D0%B0%D1%83%D0%B4%D0%B8%D0%A5%D0%BE%E2%84%A2-%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%BE%D0%BC%D0%B8%D1%80%D0%B5IT%21">
                                        <GrYoutube size={20} /> YouTube</Nav.Link></li>
                                    <li> <Nav.Link className={style.li} href="#"> FAQ</Nav.Link></li>
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ backgroundColor: "#212529", color: "#fff" }}>
                <Container style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                    <Nav >Dybenko</Nav>
                </Container>
            </Container>
        </Nav>
    );
}

export default Footer;