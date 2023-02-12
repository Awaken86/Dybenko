import React from 'react';
import { Button, Card, Container, Form, Nav } from "react-bootstrap"
import { FiTrash2 } from "react-icons/fi"
import style from './Products-tile.module.css'
const ProductsTile = (props) => {
    const product = props.product
    //отнять
    const subtractFromQuantity = () => {
        if (product.countItem === 1) {
            return false
        } else {
            props.changeCount(product, -1)
        }
    }
    //прибавить
    const addToQuantity = () => {
        props.changeCount(product, 1)
    }
    //удалить
    const deleteProduct = () => {
        props.deleteItem(product)
    }
    //добавить к продуктам для оплаты
    const addTofPaymentBasket = () => {
        props.updateForPayment(product,"true")
    }
    return (
        <Container>
            <Card className={style.card} >
                <Card.Body className={style.CardBody}>
                    <Form.Group
                        className={style.checkbox}
                    >
                        <Form.Check type="checkbox"
                            readOnly={true}
                            checked={product.forPayment}
                            onClick={() => {
                                addTofPaymentBasket()
                            }} />
                    </Form.Group>
                    <Card.Img className={style.imgCard} variant="top" src={product.picture} />
                    <Card.Title >
                        <Nav className={style.title}>
                            {product.title}
                        </Nav>
                        <Nav className={style.price}>
                            {product.price} руб.
                        </Nav>
                    </Card.Title>
                    <Nav className={style.counter}>
                        {product.countItem === 1 ?
                            <Button variant="light" onClick={deleteProduct}><FiTrash2 /></Button> :
                            <Button variant="light" onClick={subtractFromQuantity}>-</Button>
                        }
                        <span>{product.countItem}</span>
                        <Button variant="light" onClick={addToQuantity}>+</Button>
                    </Nav>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ProductsTile