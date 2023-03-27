// import { initializeApp } from "firebase/app";
// import { getFirestore, addDoc, doc, collection, writeBatch } from "firebase/firestore";
// import myProducts from "../components/Products/products";

// const firebaseConfig = {
//     apiKey: "AIzaSyD2O0WF4EzqIlWT9BhRNwhmb3nJjVA79Gc",
//     authDomain: "crosstuf-afdc6.firebaseapp.com",
//     projectId: "crosstuf-afdc6",
//     storageBucket: "crosstuf-afdc6.appspot.com",
//     messagingSenderId: "302637949174",
//     appId: "1:302637949174:web:bc2640b589a8e1a27cccd7"
//   };
  
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);

// // export async function createOrder(orderData) {
// //   const collectionRef = collection(db, "orders");

// //   console.log(orderData);

// //   const response = await addDoc(collectionRef, orderData);
// //   console.log("Orden creada correctamente", response.id);

// //   return response.id;
// // }

// /* Opcional */
// export async function exportData() {
//   //for ... of
//   const collectionRef = collection(db, "products");

//   for (let item of products) {
//     const { id } = await addDoc(collectionRef, item);
//     console.log("Documento creado", id);
//   }
// }

// export async function exportDataWithBatch() {
//   const batch = writeBatch(db);
//   const collectionRef = collection(db, "products");

//   for (let item of products) {
//     const newDoc = doc(collectionRef);
//     batch.set(newDoc, item);
//   }

//   const resp = await batch.commit();
//   console.log(resp);
// }