import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="" element={<HomePage />} />
            </Routes>
        </div>

    );
}

export default App;

