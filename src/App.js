
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Componentes/HeaderComponent/Header'
import SlideImage from './Componentes/Slide_Images/SlideImage'
import Button from './Componentes/Button/Button'
import Cards_Exhibition from './Componentes/Cards_exhibition_Container/Cards_Exhibition';
import Lupa_Icon from './imagens/icons/lupa_icon.svg'
import SearchBar from './Componentes/Search_Bar/SearchBar';
import Message from './Componentes/Alert_Message/Message';

 
function App() {

  return (
    <div>
      <Header></Header>

      <SearchBar/>

      <SlideImage></SlideImage>

      <nav className='nav_Buttons'>
        <Button ButtonText="Novas Coleções"/>
        <Button ButtonText="Acessórios"/>
        <Button ButtonText="Promoções"/>
      </nav>

      
      <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
      <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
      <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>

      <Message/>
  </div>
  );
}

export default App;
