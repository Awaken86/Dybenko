import { useEffect } from "react"
import { Card, Container, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"
import style from '../ProductsList/ProductsList.module.css'
import ProductTile from "./Product-tile"
const Basket = () => {
    const basket = useSelector((state) => state.BasketPage.basket)
    const findId = basket.find(obj => obj.id !== undefined)

    return (
        <Container>
            {findId ?
                basket.map(arrObj => <ProductTile arrObj={arrObj} />) :
                <Nav>тут ничего</Nav>
            }
        </Container>
    )
}
export default Basket