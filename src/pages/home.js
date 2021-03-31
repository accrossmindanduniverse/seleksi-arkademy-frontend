import React, { useState, useEffect } from 'react';
import { Logout } from './../redux/actions/auth';
import { GetProducts, DeleteProduct, UpdateProduct } from './../redux/actions/product';
import { connect } from 'react-redux';

import './styles/home.css';


const Home = (props) => {
  const token = localStorage.getItem('token');

  const [data, setData] = useState([]);
  const [list, setList] = useState({
    nama_produk: '',
    keterangan: '',
    harga: ''
  });
  const [modal, setModal] = useState({
    isOpen: false,
    id: 0
  });


  const handleUpdate = (id) => {
    props.UpdateProduct(token, id, list).then((res) => {
      console.log(res)
      setList({
        ...list,
        nama_produk: '',
        keterangan: '',
        harga: ''
      })
      setModal({
        ...modal,
        isOpen: false,
        id: 0
      })
    }).catch((err) => {
      console.log(err)
    })
  };

  const handleLogout = () => {
    props.Logout()
    localStorage.removeItem('token')
    props.history.push('/signin')
  };

  const handleDeleteProduct = (id) => {
    props.DeleteProduct(token, id).then((res) => {
      console.log(res)
    })
  };

  useEffect(() => {
    if (token) {
      props.GetProducts(token).then((res) => {
        setData(res.action.payload.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [token]);

  return (
    <div className='modalTrigger'>
      <div className='modal'
        style = {
          {
            display: modal.isOpen ? 'block' : 'none'
          }
        }
      >
      <div className='modalForm'>
        <div>
          <label>Produk: </label>
          <input type="text" value={list.nama_produk} onChange={(e) => 
            setList({
              ...list,
              nama_produk: e.target.value
            })}/>
        </div>
        <div>
          <label>Keterangan: </label>
          <input type="text" value={list.keterangan} onChange={(e) => 
            setList({
              ...list,
              keterangan: e.target.value
            })}/>
        </div>
        <div>
          <label>Harga: </label>
          <input type="text" value={list.harga} onChange={(e) => 
            setList({
              ...list,
              harga: e.target.value
            })}/>
        </div>
          <div>
            <button onClick={() => handleUpdate(modal.id)}>Save Edit</button>
            <button
            onClick={() => setModal({
              ...modal,
              isOpen: false,
            })}
          >
            close
          </button>
          </div>
      </div>

      </div>
      <div className='home'>
        {
          data.map((dataMap, index) => {
            return (
              <div id='home-product' key={index}>
                <p>Produk: {dataMap.nama_produk}</p>
                <p>Keterangan: {dataMap.keterangan}</p>
                <p>Harga: {dataMap.harga}</p> 
                <p>Jumlah: {dataMap.jumlah}</p>
                <button key={index} onClick={() => handleDeleteProduct(dataMap._id)}>Delete</button>
                <button
                  onClick={() => {
                    setModal({...modal, isOpen: true, id: dataMap._id});
                    setList({
                      ...list,
                      nama_produk: data[index].nama_produk,
                      keterangan: data[index].keterangan,
                      harga: data[index].harga
                    })
                  }}
                >Edit</button>
              </div>
            )
          })
        }
      </div>
      <div>
        <button id='btn-logout' onClick={handleLogout}>Sign Out</button>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product
});

const mapDispatchToProps = { Logout, GetProducts, DeleteProduct, UpdateProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
