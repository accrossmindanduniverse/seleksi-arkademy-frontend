import React, { useState } from 'react'
import { AddProduct } from '../../redux/actions/product'
import { connect } from 'react-redux';
import '../styles/profile.css'

const Profile = (props) => {
  const token = localStorage.getItem('token');
  const [dataUpdate, setDataUpdate] = useState([])

  const [data, setData] = useState({
    nama_produk: '',
    keterangan: '',
    harga: ''
  })



  const handleAddProduct = (res) => {
    console.log(res)
    props.AddProduct(token, data)
    props.history.push('/')
  }


  return (
    <div>
      {
      <form className='form'>
        <label>Produk: </label>
          <input type="text" value={data.nama_produk} placeholder='Produk' onChange={(e) => setData({
            ...data,
            nama_produk: e.target.value
          })}/><br></br>
        <label>Keterangan: </label>
          <input type="text" value={data.keterangan} placeholder='Keterangan' onChange={(e) => setData({
            ...data,
            keterangan: e.target.value
          })}/><br></br>
        <label>Harga: </label>
          <input type="text" value={data.harga} placeholder='Harga' onChange={(e) => setData({
            ...data,
            harga: e.target.value
          })}/><br></br>
          <button onClick={handleAddProduct}>Submit</button>
      </form>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product
});

const mapDispatchToProps = { AddProduct };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
