import React from 'react';
import ItemDetail from '../ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from '../../services/firestore'



async function getSingleItemFromFirebase(itemId) {
  const productsColectionRef = collection(db, "products");
  const docRef = doc(productsColectionRef, itemId);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists() === false)
    throw new Error("No existe el documento")

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

function ItemDetailContainer() {

  const [product, setProduct] = useState({});

  const params = useParams();
  const detailId = params.detailId;


  useEffect(() => {
    getSingleItemFromFirebase(detailId)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  if (product.name === undefined) return <Loader />

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer;
