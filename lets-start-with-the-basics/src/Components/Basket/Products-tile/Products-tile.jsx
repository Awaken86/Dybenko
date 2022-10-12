import { useEffect, useState } from "react"
import { Button, Card, Container, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"
import style from './Products-tile.module.css'
const ProductsTile = (props) => {
    //отнять
    const subtractFromQuantity = () => {
        if (props.arrObj.countItem === 1) {
            return false
        } else {
            props.updateBasket(props.arrObj, props.count - 1)
        }
    }
    //прибавить
    const addToQuantity = () => {
        props.updateBasket(props.arrObj, props.arrObj.countItem + 1)
    }
    return (
        <Container>
            <Card className={style.card} >
                <Card.Body className={style.CardBody}>
                    <Card.Img className={style.imgCard} variant="top" src={"http://localhost:3001/" + props.arrObj.picture} />
                    <Card.Title >
                        <Nav className={style.title}>
                            {props.arrObj.title}
                        </Nav>
                        <Nav className={style.price}>
                            {props.arrObj.price}
                        </Nav>
                    </Card.Title>
                    <Nav className={style.counter}>
                        <Button variant="light" onClick={subtractFromQuantity}>-</Button>
                        <span>{props.arrObj.countItem}</span>
                        <Button variant="light" onClick={addToQuantity}>+</Button>
                    </Nav>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ProductsTile