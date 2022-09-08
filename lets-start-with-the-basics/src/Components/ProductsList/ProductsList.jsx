import React, { useEffect } from 'react';
import { Button, Card, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './ProductsList.module.css';
import asd from '../../ComItems/mp3/haushnike&zaradki.mp3'
import ReactAudioPlayer from 'react-audio-player';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/product-redures';

const ProductsList = (props) => {
    const dispatch = useDispatch()
    const actyalType = props.type
    const product = useSelector((state) => state.ProductPage.product)
    useEffect(() => {
        dispatch(getProduct(actyalType))
    }, [])
    useEffect(() => {
        dispatch(getProduct(actyalType))
    }, [actyalType])
    //зависемость от type
    return (
        <>
            <Container className={style.Container}>
                <Filter />

                {/*<ReactAudioPlayer src={asd} autoPlay volume={0.01}/>*/}

                {
                    product.map(p => <Card className={style.card} key={p._id}>
                        <Nav as={Link} to={`/product/${p._id}`}>
                            <Card.Img className={style.imgCard} variant="top" src={"http://localhost:3001/" + p.picture} />
                        </Nav>
                        <Card.Body>
                            <Card.Title className={style.title}>{p.title}</Card.Title>
                            <Card.Text className={style.title}>
                                {p.description}
                            </Card.Text>
                            <Button as={Link} to={`/product/${p._id}`} variant="primary">{p.price}p</Button>
                        </Card.Body>
                    </Card>)
                }


            </Container>
        </>
    )

}

export default ProductsList;

