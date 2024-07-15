import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import PokemonList from './components/PokemonList'; 
import PokemonDetails from './components/PokemonDetail'; 
import About from './components/About';
import './index.css';

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/pokemones" className={({ isActive }) => (isActive ? 'active' : '')}>Pokemones</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<PokemonList />} />
        <Route path="/pokemones/:name" element={<PokemonDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
