import React from 'react'
import { NavLink } from 'react-router-dom';

function CartStatus() {
  return (
    <div>
      <h1>Thank you for buying in CROSSTUF.</h1>
      <NavLink to='/'><button>Continue buying</button></NavLink>
    </div>
  )
}

export default CartStatus; 