import React, { useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/Product-Reducer';
import style from './Filter.module.css';

const Filter = (props) => {
    const [color, setColor] = useState('withoutFilter')
    let colorArray = ['red', 'white', 'black']
    const dispatch = useDispatch()
    let setFilterHandler = () => {
        dispatch(actions.setColorFilter(color))
    }
    let filterCleaner = () => {
        dispatch(actions.setColorFilter('withoutFilter'))
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
                    <Button variant='dark' onClick={filterCleaner}>Очистить фильтр</Button>
                </Card.Body>
            </Card>
        </Nav>
    );
}

export default Filter;

// const PriceForm = (props) => {
//     (
//         <div>
//             <h1>Anywhere in your app!</h1>
//             <Formik
//                 initialValues={{ email: '', password: '' }}
//                 validate={values => {
//                     const errors = {};
//                     if (!values.email) {
//                         errors.email = 'Required';
//                     } else if (
//                         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//                     ) {
//                         errors.email = 'Invalid email address';
//                     }
//                     return errors;
//                 }}
//                 onSubmit={(values, { setSubmitting }) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         setSubmitting(false);
//                     }, 400);
//                 }}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                     /* and other goodies */
//                 }) => (
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="email"
//                             name="email"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.email}
//                         />
//                         {errors.email && touched.email && errors.email}
//                         <input
//                             type="password"
//                             name="password"
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.password}
//                         />
//                         {errors.password && touched.password && errors.password}
//                         <button type="submit" disabled={isSubmitting}>
//                             Submit
//                         </button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

export const SelectButton = (props) => {
    return (
        <button className={style.button} style={{ backgroundColor: props.color }} onClick={() => { props.setColor(props.color) }}></button>
    )
}