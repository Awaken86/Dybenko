import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import style from './PriceFilterForm.module.css'

export const PriceFilterForm = React.memo((props) => {
    let [editMode, setEditMode] = useState(false)
    
    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactiveEditMode = () => {
        setEditMode(false)
        //props.updateStatus(status);
    }
    // const onStatusChange = (e) => {
    //     setStatus(e.currentTarget.value)
    // }
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
                            <div>
                                {!editMode &&
                                    <div onDoubleClick={activeEditMode}>
                                        <span className={style.PriceColor}>{PriceInfo.maxPrice ? PriceInfo.maxPrice
                                            : 'noPrice'}</span>
                                        <br />
                                        <span className={style.PriceColor}>{PriceInfo.minPrice ? PriceInfo.minPrice
                                            : 'noPrice'}</span>
                                    </div>
                                }
                                {editMode &&
                                    <div onBlur={deactiveEditMode}>
                                        <Field value={PriceInfo.maxPrice} type="input" name="maxPrice" className={style.inputElem} />
                                        <ErrorMessage name="maxPrice" component="div" />
                                        <Field value={PriceInfo.minPrice} type="input" name="minPrice" className={style.inputElem} />
                                        <ErrorMessage name="minPrice" component="div" />
                                    </div>
                                }
                            </div>

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