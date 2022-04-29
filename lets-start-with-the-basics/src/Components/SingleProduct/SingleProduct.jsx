import React from 'react';
import { Button, Card, Container} from 'react-bootstrap';
import style from './SingleProduct.module.css';
const SingleProduct = (props) => {
    const {price, picture,title} = props.selectedItem;
    debugger
    return (
        <Container className={style.Container}>
            {
                
                <Card style={{ width: '18rem', marginTop: '50px' }}>
                    
                        <Card.Img variant="top" src={"http://localhost:3001/" + picture} />
                    
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">{price}p</Button>
                    </Card.Body>
                </Card>
            }
        </Container>
    )
    
}
debugger

export default SingleProduct;