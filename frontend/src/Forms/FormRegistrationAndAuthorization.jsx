// import { Button, Form, Nav } from "react-bootstrap";
// import { Formik, Field, Form } from 'formik';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const FormRegistrationAndAuthorization = (props) => {
//     return (
//         <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                     {"We'll never share your email with anyone else)"}
//                 </Form.Text>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Enter password" />
//                 {props.isRegistration ? <Nav>

//                     <Form.Control type="password" placeholder="Confirm the password" />
//                 </Nav> : null}
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//         </Form>
//     );
// }
// import React from 'react';
// import { Formik, Field, Form } from 'formik';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const FormRegistrationAndAuthorization = (props) => {
//     const validateForm = values => {
//         const errors = {};
//         if (!values.email) {
//             errors.email = 'Email is required';
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//             errors.email = 'Invalid email address';
//         }
//         if (!values.password) {
//             errors.password = 'password is required';
//         }
//         if (props.isRegistration && values.ConfirmPassword !== values.password){
//             errors.ConfirmPassword = 'Confirm Password is required';
//         }

//             return errors;
//     };


//     return (
//         <Formik
//             initialValues={{ email: '', password: '', ConfirmPassword: '', checkbox: false }}
//             validate={validateForm}
//         >
//             {(formik, isSubmitting) => (
//                 <Form>
//                     <div className="form-group">
//                         <label htmlFor="email">Email Address</label>
//                         <Field name="email" className={(formik.touched.email && formik.errors.email) ?
//                             'form-control is-invalid' : 'form-control'} type="email" placeholder="Enter email" />
//                         {formik.touched.email && formik.errors.email ? (
//                             <div className="invalid-feedback">{formik.errors.email}</div>
//                         ) : null}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">password</label>
//                         <Field name="password" className={(formik.touched.password && formik.errors.password) ?
//                             'form-control is-invalid' : 'form-control'} type="password" placeholder="Enter password" />
//                         {formik.touched.password && formik.errors.password ? (
//                             <div className="invalid-feedback">{formik.errors.password}</div>
//                         ) : null}
//                     </div>
//                     {props.isRegistration ? <div className="form-group">
//                         <Field name="ConfirmPassword" className={(formik.touched.ConfirmPassword && formik.errors.ConfirmPassword) ?
//                             'form-control is-invalid' : 'form-control'} type="password" placeholder="Confirm the password" />
//                         {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
//                             <div className="invalid-feedback">{formik.errors.ConfirmPassword}</div>
//                         ) : null}
//                     </div> : null}
//                     <div className="form-group">
//                         <Field name="checkbox" type="checkbox" />
//                         <label htmlFor="checkbox">Check me out</label>
//                     </div>
//                 </Form>
//             )
//             }
//         </Formik >
//     );
// }
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Form, FormLabel, Modal, Nav } from "react-bootstrap";


const FormRegistrationAndAuthorization = (props) => {
    const formik = useFormik(
        {
            initialValues: {
                email: '',
                password: '',
                confirmPassword: '',
                rememberMe: false
            },
            validationSchema: Yup.object({
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                password: Yup.string()
                    .min(5, 'Too Short!')
                    .max(25, 'Too Long!')
                    .required("Required"),
                confirmPassword: Yup.string()
                    .test({
                        exclusive: false,
                        message: 'invalid password confirmation',
                        test: function (value) {
                            // You can access the price field with `this.parent`.
                            if (!props.isRegistration) { return true }
                            if (value === this.parent.password) {
                                return value
                            }
                        },
                    })
            }),
            onSubmit: values => {
                props.submitHandler(values)
            }
        })
    const cleaner = () => {
        formik.values.confirmPassword = ''
    }
    return (
        <Nav>
            <Container>

                <Form onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password" placeholder="Enter password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-danger">{formik.errors.password}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        {props.isRegistration ?
                            <Form.Group controlId="confirmPassword">
                                <Form.Control
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm the password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div className="text-danger">{formik.errors.confirmPassword}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group> : cleaner()
                        }
                        <Form.Group className="mb-3" controlId="Checkbox">
                            <Form.Check name="rememberMe" type="checkbox" onChange={formik.handleChange} value={formik.values.rememberMe}
                            label='remember me'>
                                
                                
                            </Form.Check>

                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                        {props.isRegistration ?
                            <Button variant="primary" type="submit"
                            >Register</Button>
                            : <Button variant="primary"
                                type="submit"
                            >Войти</Button>}
                    </Modal.Footer>
                </Form>
            </Container>
        </Nav >
    );
}

export default FormRegistrationAndAuthorization;