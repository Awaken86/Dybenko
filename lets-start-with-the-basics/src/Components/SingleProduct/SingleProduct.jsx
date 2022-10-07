import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/Basket-Reducer';
import { getOneProduct } from '../../redux/Product-Reducer';
import style from './SingleProduct.module.css';


const SingleProduct = (props) => {
    const dispatch = useDispatch()
    const [countItem, setCountItem] = useState(1);
    const selectedItem = useSelector((state) => state.ProductPage.selectedItem)
    const Auth = 'false'
    const basket = useSelector((state) => state.BasketPage.basket)
    useEffect(() => {
        const url = window.location.pathname
        dispatch(getOneProduct(url))
    }, [])
    const addToBasketHandler = () => {
        dispatch(addToBasket(Auth, selectedItem, countItem))
    }

    return (
        <Container className={style.Container} style={{ marginTop: '50px' }} >
            <Row>
                <Col sm={12} xxl={4} lg={5} md={6}>
                    <Image fluid={true} thumbnail={true} variant="top" src={"http://localhost:3001/" + selectedItem.picture} />
                </Col>
                <Col sm={12} xxl={8} lg={7} md={6}>
                    <div className={style.title}><span className={style.title}>{selectedItem.title}</span></div>
                    <div className={style.price}>{selectedItem.price}₽ {countItem}кл
                        <Button className={style.button} variant="dark" onClick={() => { addToBasketHandler() }}>В корзину</Button>
                    </div>
                    <h5>Описание:</h5>
                    <span className={style.description}>{selectedItem.description}</span>
                </Col>
            </Row>

        </Container>
    )

}

export default SingleProduct;