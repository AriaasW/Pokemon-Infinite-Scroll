import { useState } from 'react'
import Navbar from './assets/components/Navbar';
import PokemonList from './assets/components/PokemonList';
import SearchedPokemon from './assets/components/SearchedPokemon';
import './App.css'

function App() {
  const [searchMode, setSearchMode] = useState(false);
  const [searchTarget, setSearchTarget] = useState('');

  return (
    <>
      <Navbar setSearchTarget={setSearchTarget} setSearchMode={setSearchMode}/>
      {searchMode ? 
      <SearchedPokemon searchTarget={searchTarget}/> : 
      <PokemonList />}
    </>
  )
}

export default App
