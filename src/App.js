
import './App.css';
import React from 'react';
import { useState, useEffect, createContext } from 'react';
import Header from './Componentes/HeaderComponent/Header'
import SlideImage from './Componentes/Slide_Images/SlideImage'
import Button from './Componentes/Button/Button'
import Cards_Exhibition from './Componentes/Cards_exhibition_Container/Cards_Exhibition';
import Lupa_Icon from './imagens/icons/lupa_icon.svg'
import SearchBar from './Componentes/Search_Bar/SearchBar';
import Message from './Componentes/Alert_Message/Message';
import Loading from './Componentes/Loading/Loading';

export const DataContext = createContext()

 
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

      <DataContext.Provider value={'teste'}>
        <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
        <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
        <Cards_Exhibition title="Pokémon" CardType="Pokemon"/>
      </DataContext.Provider>
      

      <Message/>
  </div>
  );
}

export default App;
