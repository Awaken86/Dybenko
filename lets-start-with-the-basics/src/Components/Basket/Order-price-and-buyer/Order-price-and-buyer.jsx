import React from 'react';
import { Button, Container, Nav } from "react-bootstrap"
import style from './Order-price-and-buyer.module.css'
const OrderPriceAndBuyer = () => {
    return (
        <Container className={style.Container}>

            <h2>Сумма заказа</h2>
            <Nav className={style.toPayAndSumma}>
                <Nav className={style.toPay}>К оплате</Nav>
                <Nav className={style.Summa}>0,00 руб.</Nav>
            </Nav>
            <Button variant="danger">Купить</Button>

        </Container>
    )
}
export default OrderPriceAndBuyer