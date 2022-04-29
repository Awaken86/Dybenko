import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SingleProduct from './SingleProduct';
import {getOneProduct} from '../../redux/product-redures'

class SingleProductContainer extends React.Component {
    componentDidMount() {
        const url = window.location.pathname
        this.props.getOneProduct(url);
    }




    render() {
        return <div>
            <SingleProduct selectedItem={this.props.selectedItem} />
        </div>
    }
    
}

let mapStateToProps = (state) => {
    return {
        selectedItem: state.ProductPage.selectedItem
    }
}


export default compose(
    connect(mapStateToProps, {getOneProduct})
)(SingleProductContainer)
