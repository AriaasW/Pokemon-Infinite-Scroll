import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import { Rings } from 'react-loader-spinner';

function SearchedPokemon({ searchTarget }) {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchPoke = async () => {
        const api = `https://pokeapi.co/api/v2/pokemon/${searchTarget}`;

        try {
            setLoading(true);
            setError('');
            const response = await axios.get(api);
            setPokemon(response.data);
        }
        catch(err) {
            setError('Pokemon not found.');
            setPokemon(null);
        }
        finally {
            setLoading(false);
        }
           
    }

    

    useEffect(() => {
        if(searchTarget) {
            fetchPoke();
        }
    }, [searchTarget]);

    return (
        <div className="searched-container">

            {loading ? 
            <Rings height='80' width='80' color="white" ariaLabel="loading"/> :
            (
                pokemon ? <Pokemon 
                    key={pokemon.id}
                    id={pokemon.id} 
                    name={pokemon.name} 
                    type={pokemon.types[0].type.name}                  
                    height={pokemon.height}
                    weight={pokemon.weight}
                    image={pokemon.sprites.front_default}/> : 
                error && <p className="errorr">{error}</p>  
            )}

        </div>
    )
        
    }




export default SearchedPokemon;