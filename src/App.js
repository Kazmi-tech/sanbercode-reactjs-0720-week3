import React, { Component } from 'react';
import Table from './tugas11/daftarBuah'
// import logo from './logo.svg';
import { Timer } from './tugas12/countdown'
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Timer start={100}/>
      </header>
    </div>
  );
}

export default App;
