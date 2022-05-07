import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import style from './Filter.module.css';

const Filter = () => {
    
    const [color, setColor] = useState('')
    let colorArray = ['red', 'white', 'black']
    
    
    return (
        <Nav className={style.NavContainer}>
            <div className={style.NavColorContainer}>
                Selected:{color}
                {colorArray.map((i) => <SelectButton setColor={setColor} color={i} />)}
                <Button variant='dark'>Фильтр</Button>
            </div>
        </Nav>
    );
}

export default Filter;

export const SelectButton = (props) => {
    return (
        <button style={{ backgroundColor: "#000" }} onClick={() => { props.setColor(props.color) }}>{props.color}</button>
    )
}