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
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Form, Modal, ModalFooter, Nav } from "react-bootstrap";

const FormRegistrationAndAuthorization = (props) => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .required("Required"),
            confirmPassword: Yup.string()
                .required("Required")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            // setFormState(values);
        }
    });
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
                        <Form.Group controlId="firstName">
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                name="firstName"
                                type="password" placeholder="Enter password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            <Form.Text className="text-danger">
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <div className="text-danger">{formik.errors.firstName}</div>
                                ) : null}
                            </Form.Text>
                        </Form.Group>
                        {props.isRegistration ?
                            <Form.Group controlId="lastName">
                                <Form.Control
                                    name="lastName"
                                    type="password"
                                    placeholder="Confirm the password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                />
                                <Form.Text className="text-danger">
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className="text-danger">{formik.errors.lastName}</div>
                                    ) : null}
                                </Form.Text>
                            </Form.Group> : null}
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                        {props.isRegistration ?
                            <Button variant="primary" type="submit"
                                onClick={values => props.setFormState(values)}>Register</Button>
                            : <Button variant="primary"
                                type="submit"
                                onClick={values => props.setFormState(values)} >Войти</Button>}
                    </Modal.Footer>
                </Form>
            </Container>
        </Nav >
    );
}

export default FormRegistrationAndAuthorization;