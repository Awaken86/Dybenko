import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactZitraksMode from './ReactZitraksMode';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';



const container = document.getElementById('root');
document.body.style = 'background: rgb(22, 22, 22)';
const root = createRoot(container);
root.render(

    <BrowserRouter>
        <Provider store={store}>
            <ReactZitraksMode />
        </Provider>
    </BrowserRouter>

);
