
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Componentes/HeaderComponent/Header'
import SlideImage from './Componentes/Slide_Images/SlideImage'
import Button from './Componentes/Button/Button'
import Cards_Exhibition from './Componentes/Cards_exhibition_Container/Cards_Exhibition';

import Login from './Componentes/Login/Login';
import Cadastro from './Componentes/Cadastro/Cadastro';
import Lupa_Icon from './imagens/icons/lupa_icon.svg'

function App() {

  
  

  return (
    <div>
      <Header></Header>

      <div className="header_searchBar">
            <input type="text"></input>
            <button><img src={Lupa_Icon}></img></button>
      </div>

      <SlideImage></SlideImage>
      <Login/>
      <Cadastro/>

      <nav className='nav_Buttons'>
        <Button ButtonText="Novas Coleções"/>
        <Button ButtonText="Acessórios"/>
        <Button ButtonText="Promoções"/>
      </nav>

      
      <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
  </div>
  );
}

export default App;
