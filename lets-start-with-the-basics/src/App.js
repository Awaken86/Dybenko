import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import ProductsContainer from './Components/ProductsList/ProductsContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/ProductsList" element={<ProductsContainer />} />
            </Routes>
        </div>

    );
}

export default App;

