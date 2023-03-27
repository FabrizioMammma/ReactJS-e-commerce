import React from 'react';
import Counter from '../ItemCount';
import { useContext } from 'react';
import cartContext from '../../Context/cartContext';

function ItemDetail({ product }) {

  const {addItem} = useContext(cartContext);
  
  function addToCart(count) {
    addItem(product, count);
  };

  return (
    <div className='cards'>
      <div className='card' key={product.id}>
        <img src={product.image} className='card-img-top card-img-size' alt={product.price} />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text'>{product.detail}</p>
          <p className='card-text'>${product.price}</p>
          <Counter
            addToCart={addToCart}
            initialValue={1}
            stock={product.stock}
          />
        </div>
      </div>
    </div>

  )
};

export default ItemDetail;