import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

import Carrousel from './components/Carrousel'
import Titulo from './components/Titulo';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Titulo/>
      <Carrousel/> */}
      <SignUp/>
    </div>
  );
}

export default App;
