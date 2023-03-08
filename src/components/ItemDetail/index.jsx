import React from 'react';

function ItemDetail({ product }) {


  return (
    <div className='cards'>
      <div className='card' key={product.id}>
        <img src={product.image} className='card-img-top card-img-size' alt={product.price} />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text'>{product.detail}</p>
          <p className='card-text'>{product.price}</p>
          <button><a className='btn btn-primary'>Add to cart</a></button>
        </div>
      </div>
    </div>

  )
};

export default ItemDetail;