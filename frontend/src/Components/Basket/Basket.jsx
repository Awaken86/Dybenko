import React from 'react';
import { Button, Card, Container, Form, Nav } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import style from './Basket.module.css'
import ProductTile from "./Products-tile/Products-tile"
import { BsCart4 } from "react-icons/bs";
import OrderPriceAndBuyer from "./Order-price-and-buyer/Order-price-and-buyer"
import { changeCountThunk, deleteItemThunk, updateForPayment } from "../../redux/Basket-Reducer"
import { FiTrash2 } from 'react-icons/fi';


const Basket = () => {
    const basket = useSelector((state) => state.BasketPage.basket)
    const Auth = useSelector((state) => state.AuthPage.Auth)
    const dispatch = useDispatch()
    const updateForPaymentHandler = (product, ChangeForPayment) => {
        dispatch(updateForPayment(product, ChangeForPayment))
    }
    const changeCountHandler = (basketItem, count) => {
        dispatch(changeCountThunk(basketItem, count))
    }
    const deleteItemHandler = (basketItem) => {
        dispatch(deleteItemThunk(basketItem))
    }

    let allPrice = 0
    const sumPrice = (price, countItem) => {
        allPrice = allPrice + price * countItem
    }
    return (
        <Container className={style.Container}>
            {!!basket?.length ?
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
                                                    dispatch(updateForPayment('', "AllChange"))
                                                }} />
                                        </Form.Group>
                                        <Nav className={style.delete}>
                                            <Button variant="light" onClick={() => {
                                                dispatch(updateForPaymentHandler('', "DeleteSelected"))
                                            }}><FiTrash2 /></Button>
                                        </Nav>
                                    </Card.Body>
                                </Card>
                            </Container>
                            {basket.map(product => {
                                if (product.forPayment) { sumPrice(product.price, product.countItem) }
                                return < ProductTile key={product.id}
                                    changeCount={changeCountHandler}
                                    updateForPayment={updateForPaymentHandler}
                                    deleteItem={deleteItemHandler}
                                    product={product} />
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