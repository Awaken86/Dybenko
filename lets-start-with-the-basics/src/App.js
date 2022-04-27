import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import ProductsContainer from './Components/ProductsList/ProductsContainer';
import SingleProductContainer from './SingleProduct/SingleProductContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/headphones" element={<ProductsContainer type='headphones' />} />
                <Route path="/phone-charger" element={<ProductsContainer type='phone-charger' />} />
                <Route path="/products/:id" element={<SingleProductContainer  />} />
            </Routes>
        </div>

    );
}

export default App;

