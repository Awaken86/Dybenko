import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { BsHeartFill } from "react-icons/bs";
import ModalLogin from './Modal-Login';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className={style.containerNavBar}>
                <Navbar.Brand as={Link} to=''>Shota u Ashota</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Products" id="collasible-nav-dropdown" >
                            <NavDropdown.Item as={Link} to='/headphones'>Наушники</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/phone-charger'>Зарядки</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav >
                        <Nav.Link as={Link} to='/favorites'><BsHeartFill /></Nav.Link>
                        <ModalLogin />
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default NavBar;