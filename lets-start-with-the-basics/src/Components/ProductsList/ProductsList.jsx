import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import style from './ProductsList.module.css';


const ProductsList = () => {
    return (
        <>
            <Container className={style.Container}>
                <Card style={{ width: '18rem', marginTop: '50px'}}>
                    <Card.Img variant="top" src="https://iprofishop.ru/upload/iblock/582/5823fe4018731331b28939a53ef9f623.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                
            </Container>
            
        </>

    );
}

export default ProductsList;