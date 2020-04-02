import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Search from "./Components/Search"



const App = (props) =>  {
  

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon]=useState({});
  const [search, setSearch]=useState("bulbasaur");

  
  const addToSearch = query => {
    setSearch(query);
  }
  const addtoPokemonList = list => {
    setPokemonList(list);
  }
  const addPokemon = name => {
    setPokemon(name);
  }

  console.log("pokemon", pokemon)
  console.log("Type: ", pokemon.types)
  let array = [];

  array = pokemonList.map((x,i) => {
    return x.name;
  })
  console.log("List",pokemonList)
  console.log("Array", array)

  
  return (
  <div>
    {pokemon.name}
    <Search search={search} addToSearch={addToSearch} addPokemon={addPokemon} addToPokemonList={addtoPokemonList} />
  </div>
      
  );
}

export default App;
