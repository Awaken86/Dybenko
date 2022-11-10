import React from 'react';
import { Button, Card, Container, Form, Nav } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import style from './Basket.module.css'
import ProductTile from "./Products-tile/Products-tile"
import { BsCart4 } from "react-icons/bs";
import OrderPriceAndBuyer from "./Order-price-and-buyer/Order-price-and-buyer"
import { updateBasket } from "../../redux/Basket-Reducer"
import { FiTrash2 } from 'react-icons/fi';


const Basket = () => {
    const basket = useSelector((state) => state.BasketPage.basket)
    console.log(basket)
    const findId = basket?.find(obj => obj.id !== undefined)
    const dispatch = useDispatch()
    const Auth = useSelector((state) => state.AuthPage.Auth)
    const updateBasketHandler = (arrObj, count, ChangeForPayment) => {
        dispatch(updateBasket(Auth, basket, arrObj, count, ChangeForPayment))
    }
    let allPrice = 0
    const sumPrice = (price, countItem) => {
        allPrice = allPrice + price * countItem
    }
    return (
        <Container className={style.Container}>
            {findId ?
                <>
                    <Nav className={style.NavBasketContainer}>
                        <Nav>
                            <Container>
                                <Card className={style.card} >
                                    <Card.Body className={style.CardBody}>
                                        <Form.Group
                                            className={style.checkbox}
                                        >
                                            <Form.Check type="checkbox"
                                                readOnly={true}
                                                //checked={''}
                                                onClick={() => {
                                                    dispatch(updateBasket(Auth, basket, '', '', "AllChange"))
                                                }} />
                                        </Form.Group>
                                        <Nav className={style.delete}>
                                            <Button variant="light" onClick={() => {
                                                dispatch(updateBasket(Auth, basket, '', '', "DeleteSelected"))
                                            }}><FiTrash2 /></Button>
                                        </Nav>
                                    </Card.Body>
                                </Card>
                            </Container>
                            {basket.map(arrObj => {
                                if (arrObj.forPayment) { sumPrice(arrObj.price, arrObj.countItem) }
                                return < ProductTile key={arrObj.id} updateBasket={updateBasketHandler} arrObj={arrObj} />
                            }
                            )}
                        </Nav>
                        <OrderPriceAndBuyer allPrice={allPrice} Auth={Auth} />
                    </Nav></> :
                <Nav >
                    <Nav className={style.NavEmptyBasket}>
                        <BsCart4 className={style.cardIcon}></BsCart4>
                        <Nav className={style.NavText}>Ваша Корзина пуста</Nav>
                    </Nav>
                </Nav>
            }
        </Container >
    )
}
export default Basket