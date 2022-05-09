import React, { useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import style from './Filter.module.css';

const Filter = () => {

    const [color, setColor] = useState('')
    let colorArray = ['red', 'white', 'black']


    return (
        <Nav className={style.NavContainer}>
            <Card >
                <Card.Body>
                    Selected:{color}
                    <Nav>{colorArray.map((i) => <SelectButton setColor={setColor} color={i} />) }</Nav>
                    <Button variant='dark'>Фильтр</Button>
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