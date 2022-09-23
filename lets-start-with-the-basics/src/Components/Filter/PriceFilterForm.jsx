import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import style from './PriceFilterForm.module.css'

export const PriceFilterForm = React.memo((props) => {
    let [editMode, setEditMode] = useState(false)
    let [PriceInfoState, setPriceInfoState] = useState({
        maxPrice: props.maxPrice,
        minPrice: props.minPrice
    })
    useEffect(() => {
        setPriceInfoState({
            maxPrice: props.maxPrice,
            minPrice: props.minPrice
        })
    }, [props.maxPrice, props.minPrice])
    
    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactiveEditMode = () => {
        setEditMode(false)
        props.setSelectedPriceHandler(PriceInfoState);
    }
    const onMaxPriceChange = (e) => {
        setPriceInfoState({
            maxPrice: e.currentTarget.value,
            minPrice: PriceInfoState.minPrice
        })
    }
    const onMinPriceChange = (e) => {
        setPriceInfoState({
            maxPrice: PriceInfoState.maxPrice,
            minPrice: e.currentTarget.value
        })
    }
    return (
        <div>
            <div>
                <Formik

                    initialValues={
                        {
                            PriceInfoState
                        }
                    }
                    enableReinitialize={true}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                {!editMode &&
                                    <div onDoubleClick={activeEditMode}>
                                        <span className={style.PriceColor}>{PriceInfoState.maxPrice ? PriceInfoState.maxPrice
                                            : 'noPrice'}</span>
                                        <br />
                                        <span className={style.PriceColor}>{PriceInfoState.minPrice ? PriceInfoState.minPrice
                                            : 'noPrice'}</span>
                                    </div>
                                }
                                {editMode &&
                                    <div onBlur={deactiveEditMode}>
                                        <Field onChange={onMaxPriceChange} value={PriceInfoState.maxPrice} type="input" name="maxPrice" className={style.inputElem} />
                                        <ErrorMessage name="maxPrice" component="div" />
                                        <Field onChange={onMinPriceChange} value={PriceInfoState.minPrice} type="input" name="minPrice" className={style.inputElem} />
                                        <ErrorMessage name="minPrice" component="div" />
                                    </div>
                                }
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
})