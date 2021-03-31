import axios from 'axios';

export const GetProducts = (token) => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: 'http://localhost:3001/product',
      headers: {
        Authorization: token
      }
    })
  }
}

export const AddProduct = (token, data) => {
  return {
    type: 'ADD_PRODUCT',
    payload: axios({
      method: 'POST',
      data: data,
      url: 'http://localhost:3001/product/post',
      headers: {
        Authorization: token
      }
    })
  }
}

export const UpdateProduct = (token, id, data) => {
  console.log(data)
  return {
    type: 'UPDATE_PRODUCT',
    payload: axios({
      method: 'PUT',
      url: `http://localhost:3001/product/${id}`,
      data: data,
      headers: {
        Authorization: token
      }
    })
  }
}

export const DeleteProduct = (token, id) => {
  console.log(id)
  return {
    type: 'DELETE_PRODUCT',
    payload: axios({
      method: 'DELETE',
      url: `http://localhost:3001/product/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}