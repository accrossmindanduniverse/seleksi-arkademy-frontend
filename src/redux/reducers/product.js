
const initState = {
  data: {},
  isLoading: false,
  isError: false,
  errMessage: null
}

const Product = ( state = initState, action ) => {
  switch(action.type) {

    case 'GET_PRODUCTS_PENDING': {
      return {
        ...state,
        isLoading: true
    }
  }

  case 'GET_PRODUCTS_REJECTED': {
    return {
      ...state,
      isLoading: false,
      errMessage: 'Not found any product'
    }
  }

  case 'GET_PRODUCTS_FULFILLED': {
    return {
      ...state,
      isLoading: false,
      errMessage: null,
      data: action.payload.data.data
    }
  }

  case 'ADD_PRODUCT_PENDING': {
    return {
      ...state,
      isLoading: true,
      errMessage: null
    }
  }

  case 'ADD_PRODUCT_REJECTED': {
    return {
      ...state,
      isLoading: false,
      errMessage: 'Cannot add product'
    }
  }

  case 'ADD_PRODUCT_FULFILLED': {
    return {
      ...state,
      isLoading: false,
      errMessage: null,
      data: action.payload.data
    }
  }

  case 'UPDATE_PRODUCT_PENDING': {
    return {
      ...state,
    }
  }

  case 'UPDATE_PRODUCT_REJECTED': {
    return {
      ...state,
      isLoading: false,
      errMessage: 'Update failed'
    }
  }

  case 'UPDATE_PRODUCT_FULFILLED': {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data
    }
  }

  case 'DELETE_PRODUCT_PENDING': {
    return {
      ...state,
      isLoading: true,
    }
  }

  case 'DELETE_PRODUCT_REJECTED': {
    return {
      ...state,
      isLoading: false,
      errMessage: 'Cannot delete product'
    }
  }

  case 'DELETE_PRODUCT_FULFILLED': {
    return {
      data: {}
    }
  }
    default: {
      return state
    }
  }
}

export default Product