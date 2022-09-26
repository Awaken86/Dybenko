import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/Product-Reducer';
import style from './Filter.module.css';
import { PriceFilterForm } from './PriceFilterForm';

const Filter = (props) => {
    const colorArray = ['red', 'white', 'black']
    const dispatch = useDispatch()

    const SelectButton = (props) => {
        return (
            <button className={style.button} style={{ backgroundColor: props.color }} onClick={() => {
                dispatch(actions.setColorFilter(props.color))
            }}></button>
        )
    }
    return (
        <Nav className={style.NavContainer}>
            <Card >
                <Card.Body>
                    <PriceFilterForm selectedPrice={props.selectedPrice}
                        setSelectedPriceHandler={props.setSelectedPriceHandler}
                        maxPrice={props.maxPrice}
                        minPrice={props.minPrice}
                        actualType={props.actualType} />
                    max:{props.maxPrice}
                    <br />
                    mix:{props.minPrice}
                    <Nav>{colorArray.map((i) => <SelectButton key={i} color={i} />)}</Nav>
                    <Button variant='dark' onClick={props.filterCleaner}>Очистить фильтр</Button>
                </Card.Body>
            </Card>
        </Nav>
    );
}

export default Filter;

