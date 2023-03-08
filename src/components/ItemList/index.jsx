import React from 'react';
import Item from '../Item';

function ItemList({products = []}) {
  return (
    products.map(product => <Item key={product.id} info={product}/>)

  )
}

export default ItemList;