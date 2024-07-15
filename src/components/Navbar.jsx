import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav>
      <img src="https://img.icons8.com/ios-filled/50/ffffff/pokeball.png" alt="Pokeball" style={{ marginRight: 'auto' }} />
      <NavLink className={setActiveClass} to="/">Home</NavLink>
      <NavLink className={setActiveClass} to="/pokemones">Pokemones</NavLink>
    </nav>
  );
};

export default Navbar;
