import React from 'react';
import { Button, Container, Nav } from "react-bootstrap"
import style from './Order-price-and-buyer.module.css'
const OrderPriceAndBuyer = () => {
    return (
        <Container>
            <h2>Сумма заказа</h2>
            <Nav>
                <Nav>К оплате</Nav>
                <Nav>0,00 руб.</Nav>
            </Nav>
            <Button>Купить</Button>
        </Container>
    )
}
export default OrderPriceAndBuyer