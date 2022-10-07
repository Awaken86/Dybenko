import { useEffect } from "react"
import { Card, Container, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"
import style from './Product-tile.module.css'
const ProductTile = (props) => {
    return (
        <Container>
            <Card className={style.card} >
                <Card.Body className={style.Cardbody}>
                    <Card.Img className={style.imgCard} variant="top" src={"http://localhost:3001/" + props.arrObj.picture} />
                    <Card.Title >
                        <Nav className={style.title}>
                            {props.arrObj.title}
                        </Nav>
                        <Nav className={style.price}>
                            {props.arrObj.price}
                        </Nav>
                    </Card.Title>
                    <Nav>{props.arrObj.countItem}</Nav>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ProductTile