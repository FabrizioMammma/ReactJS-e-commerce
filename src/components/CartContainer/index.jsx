import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import cartContext from "../../Context/cartContext";
import CheckoutCart from "./CheckOutCart";
import './cartcontainer.css';

function CartContainer() {

  const { cart, clearCart, removeProduct, totalPrice } = useContext(cartContext);

  const total = totalPrice();

  if (total === 0) return (
    <div className="div-container">
      <h1 className="div-container--h1">Empty cart :(</h1>
      <NavLink to='/'><button className="div-container--button">Buy</button></NavLink>
    </div>
  )

  return (
    <>
    <div className="div-table">
      <table className="table">
        <thead className="thead">
          <tr>
            <th className="th">Photo</th>
            <th className="th">Product</th>
            <th className="th">Price</th>
            <th className="th">Amount</th>
            <th className="th">Remove</th>
          </tr>
        </thead>

        <tbody className="tbody">
          {cart.map((product) => (
            <tr className="tr" key={product.id}>
              <td className="td">
                <img height={50} src={product.image} alt={product.name} />
              </td>
              <td className="td">{product.name}</td>
              <td className="td">${product.price}</td>
              <td className="td">{product.count}</td>
              <td>
                <button className="td-button" onClick={() => removeProduct(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="div-form">
        <div className="div-total">
        <h4 className="total">The total is: $ {totalPrice()}</h4>
      <button className="td-button" onClick={clearCart}>Clear cart</button>
      </div>
      <CheckoutCart cart={cart} total={total}/>
    </div>
    </>
  );
}

export default CartContainer;