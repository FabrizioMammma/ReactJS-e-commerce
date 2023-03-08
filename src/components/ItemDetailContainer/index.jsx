import React from 'react';
import ItemDetail from '../ItemDetail';
import myProducts from '../Products/products';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
  
  return (
    <ItemDetail product={product} />
    )
  }
  
  export default ItemDetailContainer;
  
  // const [product, setProduct] = useState({});
  //   const { detailId } = useParams();
  
  //   useEffect(() => {
  //     const getProducts = new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve(myProducts)
  //         console.log(myProducts)
  //       }, 1000);
  //     });
  //     getProducts.then(answer => setProduct(answer.filter(productId => productId.id === detailId)))
  //     console.log(product)
  //   }, []);

