import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import Pokemon from "./Pokemon";

function PokemonList() {
    const [pokemonL, setPokemonL] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setoffSet] = useState(0);
    const [error, setError] = useState('');



    const fetchPokemon = async () => {

        let apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        setError('');
        try {
            let response = await axios.get(apiUrl)
            const data = response.data.results;
            const pokEl = data.map(pok => {
                return axios.get(pok.url);
            })
            const returnedData = await Promise.all(pokEl);
            setPokemonL(prev => [...prev, ...returnedData.map(r => r.data)]);
            setoffSet(pr => pr + limit);
            setLimit(70);
            
        }
        catch (err) {
            setError('Fetching data failed.')
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, []);

    return (
        <>
            {error ? error && <p className="errorr">{error}</p> :
            
            <InfiniteScroll
            dataLength={pokemonL.length}
            next={fetchPokemon}
            hasMore={true}
    
            >
                        <div className="pokemon-container">
                            {pokemonL.map(p => (
                                <Pokemon 
                                    key={p.id}
                                    id={p.id} 
                                    name={p.name} 
                                    type={p.types[0].type.name}
                                    height={p.height}
                                    weight={p.weight}
                                    image={p.sprites.front_default}/>
                                ))}
                        </div>
            </InfiniteScroll>
        }

        </>

    )
}



export default PokemonList;