import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2O0WF4EzqIlWT9BhRNwhmb3nJjVA79Gc",
  authDomain: "crosstuf-afdc6.firebaseapp.com",
  projectId: "crosstuf-afdc6",
  storageBucket: "crosstuf-afdc6.appspot.com",
  messagingSenderId: "302637949174",
  appId: "1:302637949174:web:4f88ad163375a4f07cccd7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}