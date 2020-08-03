import React, { Component } from 'react';
import Table from './tugas11/daftarBuah'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let dataHargaBuah = [
      {nama: "Semangka", harga: 10000, berat: 1000},
      {nama: "Anggur", harga: 40000, berat: 500},
      {nama: "Strawberry", harga: 30000, berat: 400},
      {nama: "Jeruk", harga: 30000, berat: 1000},
      {nama: "Mangga", harga: 30000, berat: 500}
    ]
    return(
      <div className="container">
        <Table daftar={dataHargaBuah}/>
      </div>
    )
  }
}

export default App;
