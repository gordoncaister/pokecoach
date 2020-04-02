import React from 'react';
import { useState, useEffect} from 'react';

import Types from "./Types"

const Pokedex = require('pokeapi-js-wrapper');

const P = new Pokedex.Pokedex();
const Search = (props) => {
    
    const [types, setTypes] = useState([])
    const [sprite, setSprite]=useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    const [pokemon, setPokemon]=useState({});
    
    useEffect(()=>{
        P .getPokemonsList()
        .then(function(response) {
            console.log("Hello from res")
            props.addToPokemonList(response.results);
            
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    useEffect(()=>{
        
        P   .getPokemonByName(props.search)
            .then( res => {
                setPokemon(res)
                console.log("res",res)
                setTypes(...types, res.types)
                setSprite(res.sprites.front_default)
            })
            .catch (err => {
                console.log(err)
            })
    },[props.search])

    
    
    console.log("Types", types)
    return(
        <div>
            <h2>{pokemon.name}</h2>
            <img src={sprite}/>
            <h3>Types:</h3>
            {
            types.map((type,i)=>(

                
                <Types type={type.type.name} key={i}/>
            )
                
            )}
        </div>
    )
}

export default Search;