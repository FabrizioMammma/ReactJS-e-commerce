import myProducts from '../Products/products';
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer({ greeting }) {

    const [data, setData] = useState([]);

    const{listId} = useParams();

    useEffect( ()=> {
        const getProducts = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(myProducts)
            }, 1000);
        });
        if(listId){
            getProducts.then( answer => setData(answer.filter( productId => productId.type === listId)))
        }else{
        getProducts.then( answer => setData(answer));
    };
    },[listId]);

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            <div className='cards'>
            <ItemList products={data}/>
            </div>
        </div>
    );
};

export default ItemListContainer;