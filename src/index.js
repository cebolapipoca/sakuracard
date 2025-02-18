import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Card_Page from './Pages/Card_Page/Card_Page.js';
import CarBuy from './Pages/CarBuy_Page/CarBuy.js';

const Router = createBrowserRouter([
        {
                path: '/',
                element: <App/>
        },
        {
                path: '/Card',
                element: <Card_Page/>
        },
        {
                path: '/CarBuy',
                element: <CarBuy/>
        },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={Router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

