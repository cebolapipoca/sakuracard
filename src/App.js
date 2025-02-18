
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Componentes/HeaderComponent/Header'
import SlideImage from './Componentes/Slide_Images/SlideImage'
import Button from './Componentes/Button/Button'
import Cards_Exhibition from './Componentes/Cards_exhibition_Container/Cards_Exhibition';

function App() {

  
  

  return (
    <body>
      <Header></Header>
      <SlideImage></SlideImage>

      <nav className='nav_Buttons'>
        <Button ButtonText="Novas Coleções"/>
        <Button ButtonText="Acessórios"/>
        <Button ButtonText="Promoções"/>
      </nav>

      
      <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
      <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
      <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
    </body>
  );
}

export default App;
