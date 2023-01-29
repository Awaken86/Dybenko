import React from 'react';
import ProductsList from './ProductsList';


const ProductsContainer = (props) => {
    return <div>
        <ProductsList
            type={props.type}
        />
    </div>
}
export default ProductsContainer

