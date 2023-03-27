import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";


// Inicio de FIREBASE--------------------------------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyD2O0WF4EzqIlWT9BhRNwhmb3nJjVA79Gc",
    authDomain: "crosstuf-afdc6.firebaseapp.com",
    projectId: "crosstuf-afdc6",
    storageBucket: "crosstuf-afdc6.appspot.com",
    messagingSenderId: "302637949174",
    appId: "1:302637949174:web:4f88ad163375a4f07cccd7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Inicio de FIREBASE--------------------------------------------------------------------------------------------

// FUNCION 1
async function getItemsFromFirebase() {
    const colectionReference = collection(db, "products");
    let snapshotProducts = await getDocs(colectionReference);
    const documents = snapshotProducts.docs;

    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}

// FUNCION 2
async function getItemsByCategoryFromFirebase(categoryURL) {
    const productsColectionRef = collection(db, "products");
    const q = query(productsColectionRef, where("category", "==", categoryURL));
    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}

function ItemListContainer({ greeting }) {

    const [data, setData] = useState([]);

    const params = useParams();
    const listId = params.listId;

    async function leerDatos() {
        if (listId === undefined) {
            let respuesta = await getItemsFromFirebase();
            setData(respuesta);
        } else {
            let respuesta = await getItemsByCategoryFromFirebase(listId);
            setData(respuesta);
        }
    }

    useEffect(() => {
        leerDatos();
    }, [listId]);

   

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            <div className='cards'>
                <ItemList products={data} />
            </div>
        </div>
    );
};

export default ItemListContainer;





// useEffect( ()=> {
//     const getProducts = new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(myProducts)
//         }, 2000);
//     });
//     if(listId){
//         getProducts.then( answer => setData(answer.filter( productId => productId.type === listId)))
//     }else{
//     getProducts.then( answer => setData(answer));
// };
// },[listId]);