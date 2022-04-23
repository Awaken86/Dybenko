import { useState } from 'react';
import { Button, Container, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { BiUser } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import FormRegistr from '../../Forms/FormRegistr';
import Formjoin from '../../Forms/Formjoin';


const NavBar = () => {
    const [show, setShow] = useState(false);
    const [registr, setRegistr] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className={style.containerNavBar}>
                <Navbar.Brand as={Link} to=''>Shota u Ashota</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/ProductsList/headphones'>Наушники</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/ProductsList/phone-charger'>Зарядки</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav >
                        <Nav.Link as={Link} to='/favorites'><BsHeartFill /></Nav.Link>
                        <Nav>
                            <Button variant="secondary" onClick={handleShow}>
                                <BiUser />
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ marginRight: "40px" }}> {registr ? <div>Регистрация</div> : <div>Вход</div>}</Modal.Title>
                                    {registr ? <Button variant="dark" onClick={() => { setRegistr(false) }}>Войти</Button>
                                        : <Button variant="dark" onClick={() => { setRegistr(true) }}>Регистрация</Button>}
                                </Modal.Header>
                                <Modal.Body>
                                    {registr ? <FormRegistr/>
                                        : <Formjoin/>}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    {registr ? <Button variant="primary" onClick={handleClose}>
                                        Register
                                    </Button>
                                        : <Button variant="primary" onClick={handleClose}>
                                            Войти
                                        </Button>}
                                </Modal.Footer>
                            </Modal>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default NavBar;