import React from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../redux/product-redures';
import ProductsList from './ProductsList';
import { compose } from 'redux';



class ProductContainer extends React.Component {
    componentDidMount() {
        this.props.getProduct(this.props.type);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.props.getProduct(this.props.type)
        }
    }



    render() {
        return <div>
            <ProductsList
                product={this.props.product}
            />
            

        </div>
    }
}
/* 
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
let mapStateToProps = (state) => {
    return {
        product: state.ProductPage.product,
        colorProduct: state.ProductPage.colorProduct
    }
}


export default compose(
    connect(mapStateToProps, {
        getProduct
    })
)(ProductContainer)
