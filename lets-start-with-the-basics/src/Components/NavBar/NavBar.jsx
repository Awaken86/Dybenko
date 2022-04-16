import { useState } from 'react';
import { Button, Container, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { GiWireframeGlobe } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { BsHeartFill, BsBagFill } from "react-icons/bs";


const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className={style.containerNavBar}>
                <Navbar.Brand as={Link} to=''>Shota u ashota</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/headphones'>Наушники</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/phone-charger'>Зарядки</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav >
                        <Nav.Link as={Link} to='/favorites'><BsHeartFill/></Nav.Link>
                        <Nav>
                            <Button variant="secondary" onClick={handleShow}>
                                <BiUser/>
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
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