import React from 'react';
import { useState, useEffect} from 'react';

import Types from "./Types"

const Pokedex = require('pokeapi-js-wrapper');

const P = new Pokedex.Pokedex();
const Search = (props) => {
    
    const [types, setTypes] = useState([])
    
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
                props.addPokemon(res)
                console.log("res",res)
                setTypes(...types, res.types)
            })
            .catch (err => {
                console.log(err)
            })
    },[props.search])

    
    
    console.log("Types", types)
    return(
        <div>
            {
            types.map((type,i)=>(
                <Types type={type.type.name} key={i}/>
            )
                
            )}
        </div>
    )
}

export default Search;