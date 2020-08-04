import React, { Component } from 'react';
import Table from './tugas11/daftarBuah'
// import logo from './logo.svg';
import { Timer } from './tugas12/countdown'
import './App.css';

// Tugas 11
// class App extends Component {
//   render() {
//     let dataHargaBuah = [
//       {nama: "Semangka", harga: 10000, berat: 1000},
//       {nama: "Anggur", harga: 40000, berat: 500},
//       {nama: "Strawberry", harga: 30000, berat: 400},
//       {nama: "Jeruk", harga: 30000, berat: 1000},
//       {nama: "Mangga", harga: 30000, berat: 500}
//     ]
//     return(
//       <div className="container">
//         <Table daftar={dataHargaBuah}/>
//       </div>
//     )
//   }
// }


//Tugas 12
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
