import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import style from './SingleProduct.module.css';
const SingleProduct = (props) => {
    const { price, picture, title, description } = props.selectedItem;
    return (
        <Container className={style.Container} style={{ marginTop: '50px' }} >
            <Row>
                <Col sm={12} xxl={4} lg={5} md={6}>
                    <Image fluid={true} thumbnail={true} variant="top" src={"http://localhost:3001/" + picture} />
                </Col>
                <Col sm={12} xxl={8} lg={7} md={6}>
                    <div className={style.title}><span className={style.title}>{title}</span></div>
                    <div className={style.price}>{price}₽<Button className={style.button} variant="dark">В корзину</Button></div>
                    <h5>Описание</h5>
                    <span className={style.description}>{description}</span>
                </Col>
            </Row>

        </Container>
    )

}

export default SingleProduct;