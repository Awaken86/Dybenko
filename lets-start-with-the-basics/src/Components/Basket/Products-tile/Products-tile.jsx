import { useEffect, useState } from "react"
import { Button, Card, Container, Form, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"
import { FiTrash2 } from "react-icons/fi"
import style from './Products-tile.module.css'
import { useFormik } from "formik"
const ProductsTile = (props) => {
    //отнять
    const subtractFromQuantity = () => {
        if (props.arrObj.countItem === 1) {
            return false
        } else {
            props.updateBasket(props.arrObj, props.arrObj.countItem - 1)
        }
    }
    //прибавить
    const addToQuantity = () => {
        props.updateBasket(props.arrObj, props.arrObj.countItem + 1)
    }
    //удалить
    const deleteProduct = () => {
        props.updateBasket(props.arrObj, null)
    }
    console.log(props.arrObj)
    //добавить к продуктам для оплаты
    if (!props.arrObj.forPayment) {
        props.arrObj.forPayment = false
    }
    return (
        <Container>
            <Card className={style.card} >
                <Card.Body className={style.CardBody}>

                    <Form.Group
                        className={style.checkbox}
                        controlId="PodTileCheckBox"
                    >
                        <Form.Check type="checkbox" value={props.arrObj.forPayment}
                            onClick={() => {
                                props.updateBasket(props.arrObj, props.arrObj.countItem, !props.arrObj.forPayment)
                            }} />
                    </Form.Group>

                    <Card.Img className={style.imgCard} variant="top" src={"http://localhost:3001/" + props.arrObj.picture} />
                    <Card.Title >
                        <Nav className={style.title}>
                            {props.arrObj.title}
                        </Nav>
                        <Nav className={style.price}>
                            {props.arrObj.price} руб.
                        </Nav>
                    </Card.Title>
                    <Nav className={style.counter}>
                        {props.arrObj.countItem === 1 ?
                            <Button variant="light" onClick={deleteProduct}><FiTrash2 /></Button> :
                            <Button variant="light" onClick={subtractFromQuantity}>-</Button>
                        }
                        <span>{props.arrObj.countItem}</span>
                        <Button variant="light" onClick={addToQuantity}>+</Button>
                    </Nav>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ProductsTile