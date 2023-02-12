import React, { useEffect } from 'react';
import { Button, Card, Container, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './ProductsList.module.css';
import asd from '../../ComItems/mp3/haushnike&zaradki.mp3'
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getProduct } from '../../redux/Product-Reducer';
import Filter from './Filter/Filter';

const ProductsList = (props) => {
    const dispatch = useDispatch()
    const actualType = props.type
    const product = useSelector((state) => state.ProductPage.product)
    const color = useSelector((state) => state.ProductPage.colorProduct)
    const maxPrice = useSelector((state) => state.ProductPage.maxPrice)
    const minPrice = useSelector((state) => state.ProductPage.minPrice)
    const selectedPrice = useSelector((state) => state.ProductPage.selectedPrice)
    console.log("render")
    useEffect(() => {
        dispatch(getProduct(actualType))
    })
    useEffect(() => {
        dispatch(getProduct(actualType, color, selectedPrice))
    }, [actualType, color, selectedPrice])
    useEffect(() => {
        filterCleaner()
    }, [actualType])
    const setSelectedPriceHandler = (selectedPrice) => {
        dispatch(actions.setSelectedPrice(selectedPrice))
    }
    const filterCleaner = () => {
        dispatch(actions.setColorFilter('withoutFilter'))
        //зачистить выбранные цены
        dispatch(actions.setSelectedPrice({}))
    }
    return (
        <>
            <Container className={style.Container}>
                <Filter filterCleaner={filterCleaner}
                    setSelectedPriceHandler={setSelectedPriceHandler}
                    selectedPrice={selectedPrice}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    actualType={actualType}
                />
                {/*<ReactAudioPlayer src={asd} autoPlay volume={0.01}/>*/}

                {
                    product.map(p =>
                        <Card className={style.card} key={p._id} as={Link} to={`/product/${p._id}`}>
                            <Nav >
                                <Card.Img className={style.imgCard} variant="top" src={p.picture} />
                            </Nav>
                            <Card.Body>
                                <Card.Title className={style.title}>{p.title}</Card.Title>
                                <Card.Title className={style.price}>{p.price}p</Card.Title>
                            </Card.Body>
                        </Card>)
                }

            </Container>
        </>
    )

}

export default ProductsList;

