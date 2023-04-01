import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='container--h1'>Welcome to</h1>
        <h1 className='container--h1-h1'>CROSSTUFF.</h1>
        <NavLink to='/category/shoe'><button className='container--button'>Products</button></NavLink>
      </div>
    </div>
  )
}

export default Home;

