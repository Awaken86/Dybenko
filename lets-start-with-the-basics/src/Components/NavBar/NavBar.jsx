import { Button, Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import { BsFillCartFill } from "react-icons/bs";
import ModalLogin from './Modal-Login';
import { useDispatch, useSelector } from 'react-redux';
import { BiUser } from 'react-icons/bi';
import { logoutThank } from '../../redux/Auth-Reducer';
import { cleanOutBasket } from '../../redux/Basket-Reducer';


const NavBar = () => {
    const basket = useSelector((state) => state.BasketPage.basket)
    const Auth = useSelector((state) => state.AuthPage.Auth)
    const dispatch = useDispatch()
    const count = basket?.length
    const LogoutHandler = () => {
        dispatch(logoutThank())
        dispatch(cleanOutBasket())
    }
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
                        <Nav.Link className={style.basketNavLink} as={Link} to='/Basket'>
                            <Nav>
                                <BsFillCartFill style={{ fontSize: 25 }} />
                                {count > 0 ? <Nav className={style.countStyle}>{count}</Nav> : null}
                            </Nav>
                        </Nav.Link>
                        {Auth ?
                            // <Dropdown>
                            //     <Dropdown.Toggle variant="success" id="dropdown-basic">
                            //         <BiUser />
                            //     </Dropdown.Toggle>
                            //     <Dropdown.Menu>
                            //         <Dropdown.Item href="#/action-1">Заказы</Dropdown.Item>
                            //         <Dropdown.Item href="#/action-2">Настройки Профиля</Dropdown.Item>
                            //         <Dropdown.Item href="#/action-3">Выйти</Dropdown.Item>
                            //     </Dropdown.Menu>
                            // </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                    <BiUser />
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item href="#/action-2">Заказы</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Настройки Профиля</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={LogoutHandler}>Выйти</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            :
                            <ModalLogin />
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default NavBar;