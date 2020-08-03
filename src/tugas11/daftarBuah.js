import React, { Component } from 'react';
import './DaftarTable.css'

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

const TableHeader = () =>{
    return (
        <thead>
            <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
            </tr>
        </thead>
    )
}


const TableBody = props => {
    const rows = props.daftar.map((row, index) => {
        return (
         <tr key={index}>
          <td>{row.nama}</td>
          <td>{row.harga}</td>
          <td>{row.berat/1000} kg</td>
         </tr>
        )
       })

      return (
        <tbody>{rows}</tbody>
      )
}

class Table extends Component{
    render(){
        const { daftar } = this.props

        return(
            <table width="720px" class="Tabel" border="1px">
                <TableHeader width="320px" class="heder"/>
                <TableBody width="200px" class="bodi" daftar ={daftar} />
            </table>
        )
    }
}

export default Table