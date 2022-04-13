import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contactos from './components/contactos/index'
import SingIn from './components/signIn';

function App() {
  return (
    <>
    
    <SingIn></SingIn>
    <Contactos></Contactos>
    </>
  );
}

export default App;
