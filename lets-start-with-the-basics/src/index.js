import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ReactZitraksMode from './ReactZitraksMode';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';


const container = document.getElementById('root');


const root = createRoot(container);
root.render(

    <BrowserRouter>
        <Provider store={store}>
            <ReactZitraksMode />
        </Provider>
    </BrowserRouter>

);
