import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import style from './ProductsList.module.css';

const ProductsList = (props) => {

    return (
        <Container className={style.Container}>
            {
                
                props.product.map(p => <Card  style={{ width: '18rem', marginTop: '50px' }} key={p.id}>
                    <Card.Img variant="top" src={"http://localhost:3001/"+p.picture} />
                    <Card.Body>
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">{p.price}p</Button>
                    </Card.Body>
                </Card>)
            }
        </Container>
    )
}

export default ProductsList;