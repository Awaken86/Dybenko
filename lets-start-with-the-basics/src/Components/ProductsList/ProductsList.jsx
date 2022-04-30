import React from 'react';
import { Button, Card, Container, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './ProductsList.module.css';

const ProductsList = (props) => {

    return (
        <>
            <Nav className={style.NavContainer}>

                <Nav className={style.NavColorContainer}>
                    <Nav>
                        <Button onClick={""} style={{ width: '30px', height: '30px' }} variant="dark" />
                        <Button style={{ width: '30px', height: '30px' }} variant="light" />
                        <Button style={{ width: '30px', height: '30px' }} variant="danger" />
                    </Nav>
                    <Button style={{ width: '100px', height: '60px' }} variant="secondary">Sort</Button>
                    <Nav>
                        <Form.Label>Range</Form.Label>
                        <Form.Range />
                    </Nav>
                </Nav>
            </Nav>



            <Container className={style.Container}>
                {
                    props.product.map(p => <Card style={{ width: '18rem', marginTop: '50px' }} key={p._id}>
                        <Nav as={Link} to={`/product/${p._id}`}>
                            <Card.Img variant="top" src={"http://localhost:3001/" + p.picture} />
                        </Nav>
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
        </>
    )

}

export default ProductsList;