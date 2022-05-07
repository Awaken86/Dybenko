import React from 'react';
import { Button, Card, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './ProductsList.module.css';
import asd from '../../ComItems/mp3/haushnike&zaradki.mp3'
import ReactAudioPlayer from 'react-audio-player';
import Filter from '../Filter/Filter';

const ProductsList = (props) => {
    return (
        <>
            <Container className={style.Container}>
            <Filter/>
                
                {/*<ReactAudioPlayer src={asd} autoPlay volume={0.01}/>*/}

                {
                    props.product.map(p => <Card style={{ width: '18rem', marginTop: '50px', margin: "auto" }} key={p._id}>
                        <Nav as={Link} to={`/product/${p._id}`}>
                            <Card.Img className={style.imgCard} variant="top" src={"http://localhost:3001/" + p.picture} />
                        </Nav>
                        <Card.Body>
                            <Card.Title className={style.title}>{p.title}</Card.Title>
                            <Card.Text className={style.title}>
                                {p.description}
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

