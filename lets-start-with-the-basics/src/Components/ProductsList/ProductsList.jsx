import React, { useEffect } from 'react';
import { Button, Card, Container, Nav } from 'react-bootstrap';
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
    useEffect(() => {
        dispatch(getProduct(actualType, color, selectedPrice))
    }, [])
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
                    product.map(p => <Card className={style.card} key={p._id}>
                        <Nav as={Link} to={`/product/${p._id}`}>
                            <Card.Img className={style.imgCard} variant="top" src={p.picture} />
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

