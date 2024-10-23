import axios from "axios";
import { writeFileSync } from 'fs';
import { join } from 'path';

async function PokemonData() {
    const limit = 100;
    const poknum = 1000;
    let promises = [];

    for (let offset=0; offset < poknum; offset+=limit) {
        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`))
    }
    
    try {
        const results = await Promise.all(promises);
        const allPokemon = results.flatMap(r => r.data.results);
        const pokeNames = allPokemon.map(p => p.name)
        const filePath = join(process.cwd(), 'pokemon.json');
        writeFileSync(filePath, JSON.stringify(pokeNames, null, 2), 'utf-8');
    }
    catch(err) {
        console.log(err)
    }
}

PokemonData();
