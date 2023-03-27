import CartWidget from '../CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <header className='header'>
      <nav className='nav'>
        <NavLink  className='logo nav-link' to='/'>CROSSTUFF.</NavLink>
        <ul className='nav-menu'>
          <li className='nav-menu-item'>
            <NavLink  className='nav-menu-link nav-link' to='/category/shoe'>Shoes</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink  className='nav-menu-link nav-link' to='/category/shirt'>Shirts</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink  className='nav-menu-link nav-link' to='/category/accesorie'>Accesories</NavLink>
          </li>
          <li className='nav-menu-item'>
            <NavLink  className='nav-menu-link nav-link nav-menu-link_active' to='/cart'><CartWidget /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
