import { Card, Container, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"
import style from '../ProductsList/ProductsList.module.css'
const Basket = () => {
    const basket = useSelector((state) => state.BasketPage.basket)
    debugger
    return (
        <Container>
            {basket.map(b => <Card className={style.card} key={b.id}>
                <Card.Img className={style.imgCard} variant="top" src={"http://localhost:3001/" + b.picture} />
                <Card.Body>
                    <Card.Title className={style.title}>{b.title}</Card.Title>
                    <Card.Text className={style.title}>
                    </Card.Text>
                    {b.price}---
                    {b.countItem}
                </Card.Body>
            </Card>)}
            <Nav>тут ничего</Nav>
        </Container>
    )
}
export default Basket