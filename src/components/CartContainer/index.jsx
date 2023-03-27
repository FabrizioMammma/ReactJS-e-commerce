import React from "react";
import { useContext } from "react";
import cartContext from "../../Context/cartContext";

function CartContainer() {

  const { cart, clearCart, removeProduct, totalPrice } = useContext(cartContext);

  const total = totalPrice();

  if (total === 0) return (

  <div>
  <h1>Carrito vacio</h1>
  <button>Comprar</button>
  </div>
  )

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Remove</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img height={50} src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.count}</td>
              <td>
                <button onClick={ () => removeProduct(product.id) }>Remove</button>
              </td>
              <th>$ --,--</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h4>The total is: $ {totalPrice()}</h4>
      </div>

      <button onClick={clearCart}>Clear cart</button>
    </>
  );
}

export default CartContainer;