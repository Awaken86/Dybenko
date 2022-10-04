import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"

const Basket = () => {
    const basket = useSelector((state) => state.BasketPage.basket)
    return (
        <Container>
            {basket}
        </Container>
    )
}
export default Basket