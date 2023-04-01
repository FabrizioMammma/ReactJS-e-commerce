import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import { CartContextProvider } from './Context/cartContext';
import CartContainer from './components/CartContainer';
import CartStatus from './components/CartContainer/CartStatus';


function App() {
  return (
    <div className='div'>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <div className='div-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:listId' element={<ItemListContainer/>} />
            <Route path='/detalle/:detailId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route
              path="/checkout/:id"
              element={<CartStatus/>}
            />
          </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

// {/* <ItemListContainer greeting={'Some of our products'} /> */}