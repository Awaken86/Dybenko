import React, { useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setColorFilter } from '../../redux/product-redures';
import style from './Filter.module.css';

const Filter = (props) => {
    const [color, setColor] = useState('withoutFilter')
    let colorArray = ['red', 'white', 'black']
    const dispatch = useDispatch()
    let setFilterHandler = () => {
        dispatch(setColorFilter(color))
    }
    let filterСleaner = () => {
        dispatch(setColorFilter('withoutFilter'))
    }

    return (
        <Nav className={style.NavContainer}>
            <Card >
                <Card.Body>
                    Selected:{color}
                    <br />
                    max:{props.maxPrice}
                    <br />
                    mix:{props.minPrice}
                    <Nav>{colorArray.map((i) => <SelectButton key={i} setColor={setColor} color={i} />)}</Nav>
                    <Button variant='dark' onClick={setFilterHandler}>Фильтр</Button>
                    <Button variant='dark' onClick={filterСleaner}>Очистить фильтр</Button>
                </Card.Body>
            </Card>
        </Nav>
    );
}

export default Filter;

export const SelectButton = (props) => {
    return (
        <button className={style.button} style={{ backgroundColor: props.color }} onClick={() => { props.setColor(props.color) }}></button>
    )
}