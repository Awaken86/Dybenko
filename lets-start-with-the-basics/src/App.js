import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import ProductsList from './Components/ProductsList/ProductsList';

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/ProductsList" element={<ProductsList />} />
            </Routes>
        </div>

    );
}

export default App;

