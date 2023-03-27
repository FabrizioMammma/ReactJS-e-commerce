import React from 'react';
import ItemDetail from '../ItemDetail';
import myProducts from '../Products/products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';


function ItemDetailContainer() {
  
    const [product, setProduct] = useState({});
  
    const params = useParams();
    const detailId = params.detailId;
  
  
    useEffect(() => {
      const getProductDetail = new Promise( resolve => {
        setTimeout(() => {
          let findedProductDetail = myProducts.find((item) => item.id === Number(detailId));
          resolve(findedProductDetail);
        }, 2000);
      });
  
      getProductDetail.then((respuesta) => setProduct(respuesta));
    }, []);
  
  
  if (product.name === undefined) return <Loader/>

  return (
    <ItemDetail product={product}/>
    )
  }
  
  export default ItemDetailContainer;
  