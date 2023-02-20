import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container />
      </header>
      <main>
        <ItemListContainer greeting={'In process...'} />
      </main>
    </div>
  );
}

export default App;
