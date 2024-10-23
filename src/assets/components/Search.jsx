import React, { useState } from "react";
import pokeData from "./pokemon.json"

function Search({ setSearchTarget, setSearchMode }) {
    const [inp, setInp] = useState('');
    const [filtered, setFiltered] = useState([]);

    const pokeList = pokeData;

    const handleEnter = (e) => {
        const v = e.target.value.toLowerCase();
        setInp(v);

        if (v) {
            const searched = pokeList.filter(pok => pok.toLowerCase().startsWith(v));
            setFiltered(searched)
        }
        else {
            setFiltered([]);
        }
    }

    const handleSubmit = () => {
        setSearchTarget(inp);
        setSearchMode(true);
        setInp('')
    }

    return (
        <div className="search">
            <div className="search-container">
                <input 
                placeholder="Search pokemon.." 
                onChange={handleEnter}
                className="search-input"
                value={inp}
                >    
                </input>
                    {inp ? (
                        <ul className="search-results">
                        {inp.length > 0 ? filtered.slice(0, 5).map(p => (
                            <li
                            key={p} 
                            className="item"
                            onClick={() => {setInp(p); setFiltered([]);}}>{p}</li>
                        )) : null}
                        </ul>
                    ) : null}
            </div>

            <button disabled={inp === ''} onClick={handleSubmit}>Search</button>
        </div>
    )
}




export default Search;