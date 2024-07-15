import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => setPokemons(response.data.results));
  }, []);

  const handleSelectionChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const goToPokemonDetail = () => {
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1>Selecciona un pokemón</h1>
        <select value={selectedPokemon} onChange={handleSelectionChange}>
          <option value="">Pokemones</option>
          {pokemons.map(pokemon => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button onClick={goToPokemonDetail}>Ver Detalle</button>
      </div>
    </div>
  );
};

export default PokemonList;
