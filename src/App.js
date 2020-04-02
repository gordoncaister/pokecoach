import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Search from "./Components/Search"
import {BgDiv, NavDiv} from "./Components/Styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faBars} from "@fortawesome/free-solid-svg-icons"



const App = (props) =>  {
  

  const [pokemonList, setPokemonList] = useState([]);
  
  const [search, setSearch]=useState("bulbasaur");
  
  const addToSearch = query => {
    setSearch(query);
  }
  const addtoPokemonList = list => {
    setPokemonList(list);
  }
  
  let array = [];

  array = pokemonList.map((x,i) => {
    return x.name;
  })
  

  
  return (
  <BgDiv>
    <NavDiv>
      <h1>PokéCoach</h1>
      <a><FontAwesomeIcon icon={faSearch}  /></a>
      <a><FontAwesomeIcon icon={faBars}  /></a>
    </NavDiv>
   
    
    <Search  search={search} addToSearch={addToSearch}  addToPokemonList={addtoPokemonList} />
  </BgDiv>
      
  );
}

export default App;
