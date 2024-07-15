import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => setPokemon(response.data));
  }, [name]);

  if (!pokemon) {
    return <div className="container">Loading...</div>;
  }

  const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

  return (
    <div className="container card-container">
      <div className="card">
        <img src={imageUrl} alt={pokemon.name} />
      </div>
      <div className="card">
        <h1>{pokemon.name}</h1>
        <ul>
          {pokemon.stats.map(stat => (
            <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
          ))}
        </ul>
        <p>{pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default PokemonDetail;
