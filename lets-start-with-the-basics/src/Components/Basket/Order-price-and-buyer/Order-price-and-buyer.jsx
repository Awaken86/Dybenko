import React from 'react';
import { Button, Container, Nav } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/Auth-Reducer';
import style from './Order-price-and-buyer.module.css'
const OrderPriceAndBuyer = (props) => {
    const dispatch = useDispatch()
    const ShowRegistration = () => {
        dispatch(actions.setShowRegistration(true))
    }
    return (
        <Container className={style.Container}>

            <h2>Сумма заказа</h2>
            <Nav className={style.toPayAndSumma}>
                <Nav className={style.toPay}>К оплате</Nav>
                <Nav className={style.Summa}>{props.allPrice.toFixed(2)} руб.</Nav>
            </Nav>
            <Button variant="danger" onClick={props.Auth ?
                () => (console.log('auth')) :
                () => (ShowRegistration())}>Купить</Button>

        </Container>
    )
}
export default OrderPriceAndBuyer