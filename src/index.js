import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Card_Page from './Pages/Card_Page/Card_Page.js';
import CarBuy from './Pages/CarBuy_Page/CarBuy.js';
import FavoritePage from './Pages/Favorite_Page/Favorite.js';
import Order from './Pages/Order_Page/Order.js';
import Search from './Pages/Search_Page/Search.js';
import ContextoTeste, { Contextozinho } from './Contextos/ContextoTeste.js';
import Loading from './Componentes/Loading/Loading.js';
import Politicas from './Pages/Politicas/Politicas.js';



const Router = createBrowserRouter([
        {
                path: '/',
                element: <App/>
        },
        {
                path: '/Card/:id',
                element: <Card_Page/>
        },
        {
                path: '/CarBuy',
                element: <CarBuy/>
        },
        {
                path: '/Favorites',
                element: <FavoritePage/>
        },
        {
                path: '/MyOrder',
                element: <Order/>
        },
        {
                path: '/Search/:q',
                element: <Search/>
        },
        {
                path: '/Politicas',
                element: <Politicas/>
        },
    ])

    
        



const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render(
                                <Contextozinho>
                                        <RouterProvider router={Router}/>
                                </Contextozinho> 
                        );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

