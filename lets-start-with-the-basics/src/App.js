import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import SingleProductContainer from './Components/SingleProduct/SingleProductContainer';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './App.module.css'
import ProductsContainer from './Components/ProductsList/ProductsContainer';
import Basket from './Components/ProductsList/Basket/Basket';

const App = () => {
    return (
        <div className={style.body}>
            <div className={style.wrapper} >
                <div className={style.content}>
                    <NavBar />
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        <Route path="/headphones" element={<ProductsContainer type='headphones' />} />
                        <Route path="/phone-charger" element={<ProductsContainer type='phone-charger' />} />
                        <Route path="/product/:id" element={<SingleProductContainer />} />
                        <Route path="/Basket" element={<Basket />} />
                    </Routes>
                </div>
                <div className={style.footer}>
                    <Footer />
                </div>
            </div>

        </div>

    );
}

export default App;

