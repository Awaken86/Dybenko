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
    let selectedPrice = props.selectedPrice
    useEffect(() => {

        if (selectedPrice.maxPrice <= props.maxPrice && selectedPrice.minPrice >= props.minPrice) {
            setPriceInfoState({
                maxPrice: selectedPrice.maxPrice,
                minPrice: selectedPrice.minPrice
            })
        } else {
            setPriceInfoState({
                maxPrice: props.maxPrice,
                minPrice: props.minPrice
            })
        }
    }, [props.maxPrice, props.minPrice, props.selectedPrice])


    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        if (PriceInfoState.maxPrice <= props.maxPrice &&
            PriceInfoState.maxPrice >= props.minPrice &&
            PriceInfoState.minPrice >= props.minPrice &&
            PriceInfoState.minPrice <= props.maxPrice) {
            props.setSelectedPriceHandler(PriceInfoState);
        }
        else {
            setPriceInfoState({
                maxPrice: props.maxPrice,
                minPrice: props.minPrice
            })
        }
    }



    const onMaxPriceChange = (e) => {
        if (/^\d+$/i.test(e.currentTarget.value)) {
            setPriceInfoState({
                maxPrice: e.currentTarget.value,
                minPrice: PriceInfoState.minPrice
            })
        }
    }
    const onMinPriceChange = (e) => {
        if (/^\d+$/i.test(e.currentTarget.value)) {
            setPriceInfoState({
                maxPrice: PriceInfoState.maxPrice,
                minPrice: e.currentTarget.value
            })
        }
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
                                {editMode ?
                                    <div onBlur={deactivateEditMode} className={style.containerInputs}>
                                        <Field onChange={onMinPriceChange} value={PriceInfoState.minPrice} type="input" name="minPrice" />
                                        <ErrorMessage name="minPrice" component="div" />
                                        <Field onChange={onMaxPriceChange} value={PriceInfoState.maxPrice} type="input" name="maxPrice" />
                                        <ErrorMessage name="maxPrice" component="div" />
                                    </div>
                                    :
                                    <div onClick={activeEditMode} className={style.containerInputs}>
                                        <Field value={`от ${PriceInfoState.minPrice}`} type="input" />
                                        <ErrorMessage name="minPrice" component="div" />
                                        <Field value={`до ${PriceInfoState.maxPrice}`} type="input" />
                                        <ErrorMessage name="maxPrice" component="div" />
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