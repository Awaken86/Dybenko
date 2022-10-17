import React from 'react';
import { Container, Nav } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import style from './Basket.module.css'
import ProductTile from "./Products-tile/Products-tile"
import { BsCart4 } from "react-icons/bs";
import OrderPriceAndBuyer from "./Order-price-and-buyer/Order-price-and-buyer"
import { updateBasket } from "../../redux/Basket-Reducer"
const Basket = () => {
    const basket = useSelector((state) => state.BasketPage.basket)
    const findId = basket.find(obj => obj.id !== undefined)
    const dispatch = useDispatch()
    const Auth = false
    console.log(basket)
    const updateBasketHandler = (arrObj, count, ChangeForPayment) => {
        dispatch(updateBasket(Auth, basket, arrObj, count, ChangeForPayment))
    }
    return (
        <Container className={style.Container}>
            {findId ?
                <Nav className={style.NavBasketContainer}>
                    <Nav>
                        {basket.map(arrObj => <ProductTile updateBasket={updateBasketHandler} arrObj={arrObj} />)}
                    </Nav>
                    <OrderPriceAndBuyer />
                </Nav> :
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