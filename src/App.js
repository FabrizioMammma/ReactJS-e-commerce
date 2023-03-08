import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Some of our products'} />} />
          <Route path='/category/:listId' element={<ItemListContainer greeting={'Some of our products'} />} />
          <Route path='/category/:detailId' element={<ItemDetailContainer />} />
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
