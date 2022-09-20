import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useEffect } from 'react';
import style from './PriceFilterForm.module.css'

export const PriceFilterForm = React.memo((props) => {
    let PriceInfo = {
        maxPrice: props.maxPrice,
        minPrice: props.minPrice
    }
    return (
        <div>
            <div>
                <Formik

                    initialValues={
                        {
                            maxPrice: PriceInfo.maxPrice,
                            minPrice: PriceInfo.minPrice
                        }
                    }

                    enableReinitialize={true}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            //alert(JSON.stringify(values, null, 2));

                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="input" name="maxPrice" className={style.inputElem} />
                            <ErrorMessage name="maxPrice" component="div" />
                            <Field type="input" name="minPrice" className={style.inputElem}/>
                            <ErrorMessage name="minPrice" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
})