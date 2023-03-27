import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import { CartContextProvider } from './Context/cartContext';
import CartContainer from './components/CartContainer';


function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:listId' element={<ItemListContainer greeting={'Some of our products'} />} />
            <Route path='/detalle/:detailId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;

// {/* <ItemListContainer greeting={'Some of our products'} /> */}