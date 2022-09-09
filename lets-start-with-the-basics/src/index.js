import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import App from './App';


const container = document.getElementById('root');


const root = createRoot(container);
root.render(

    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>

);
