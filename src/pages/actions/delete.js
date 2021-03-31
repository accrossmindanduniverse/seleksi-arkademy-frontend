import React, { useState } from 'react'
import { connect } from 'react-redux';
import { DeleteProduct } from './../../redux/actions/product';

const Delete = (props) => {
  const token = localStorage.getItem('token')
  const [data, setData] = useState([])

  const handleDeleteProduct = (res) => {
    console.log(res)
    props.DeleteProduct(token)
  }

  return (
    <div>
        <div>
          {
            data.map((deleteData, index) => {
              return (
                <button key={index} onClick={() => 
                  handleDeleteProduct(deleteData._id)
                }></button>
              )
            })
          }
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  product: state.product
})

const mapDispatchToProps = { DeleteProduct }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delete)
