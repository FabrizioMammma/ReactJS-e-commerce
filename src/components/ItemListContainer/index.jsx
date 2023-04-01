import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../services/firestore';


async function getItemsFromFirebase() {
    const colectionReference = collection(db, "products");
    let snapshotProducts = await getDocs(colectionReference);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}

async function getItemsByCategoryFromFirebase(categoryURL) {
    const productsColectionRef = collection(db, "products");
    const q = query(productsColectionRef, where("type", "==", categoryURL));
    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}

function ItemListContainer() {

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

    if (data.length === 0) return <Loader />

    return (
        <div className="itemListContainer">
            <div className='cards'>
                <ItemList products={data} />
            </div>
        </div>
    );
};

export default ItemListContainer;
