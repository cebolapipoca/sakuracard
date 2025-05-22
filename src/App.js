
import './App.css';
import React, { useContext } from 'react';
import { useState, useEffect, createContext } from 'react';
import Header from './Componentes/HeaderComponent/Header'
import SlideImage from './Componentes/Slide_Images/SlideImage'
import Button from './Componentes/Button/Button'
import Cards_Exhibition from './Componentes/Cards_exhibition_Container/Cards_Exhibition';
import Lupa_Icon from './imagens/icons/lupa_icon.svg'
import SearchBar from './Componentes/Search_Bar/SearchBar';
import Message from './Componentes/Alert_Message/Message';
import ContextoTeste from './Contextos/ContextoTeste';
import { createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter } from 'react-router-dom';
import CarBuy from './Pages/CarBuy_Page/CarBuy';
import Order from './Pages/Order_Page/Order';
import FavoritePage from './Pages/Favorite_Page/Favorite';
import Card_Page from './Pages/Card_Page/Card_Page';
import Search from './Pages/Search_Page/Search';


export function App() {

  const sla = useContext(ContextoTeste)
  
  const slideList = [
    {'image':'https://copag.com.br/uploads/tinymce/Produto%2000.png', 'link':''},
    {'image':'https://m.media-amazon.com/images/I/81M2GcPdrcL._AC_UF894,1000_QL80_.jpg', 'link':''},
    {'image':'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/pokemon-scarlet-and-violet-cover-art.jpg', 'link':''},
    {'image':"https://images.tcdn.com.br/img/img_prod/812609/combo_de_booster_pokemon_ev6_5_fabulas_nebulosas_copag_12624_1_f37a283fc5bdb75158256fce2dfe6ecb.jpg"}
  ]

  return (
    <div>
      <Header></Header>

      <SearchBar/>

      <SlideImage slideList={slideList}></SlideImage>

      <nav className='nav_Buttons'>
        <Button ButtonText="Novas Coleções"/>
        <Button ButtonText="Acessórios"/>
        <Button ButtonText="Promoções"/>
      </nav>

      <Cards_Exhibition />
      <Cards_Exhibition />
      <Cards_Exhibition />


      <Message/>
  </div>
  );
}

export default App;
