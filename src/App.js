import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Tabnav from './Components/Tabnav'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Tabnav />
      <Footer />
     
    </div>
  );
}

export default App;
