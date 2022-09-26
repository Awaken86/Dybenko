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
    const deactiveEditMode = () => {
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