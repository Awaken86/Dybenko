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
                <Card style={{ width: '18rem', marginTop: '50px'}}>
                    <Card.Img variant="top" src="https://kurgan.amazingame.ru/upload/iblock/137/137f265a95b43a50efe93f39b615803e.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '50px'}}>
                    <Card.Img variant="top" src="https://cdn1.technopark.ru/3929611652/technopark/photos_resized/product/1000_1000/226292/1_226292.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '50px'}}>
                    <Card.Img variant="top" src="https://tehnoteca.ru/img/715/714857/sennheiser_hdr_185_1.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '50px'}}>
                    <Card.Img variant="top" src="https://media-av.ru/upload/iblock/872/8725b02273cb9b285355dbd5918ca3f4.jpg" />
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