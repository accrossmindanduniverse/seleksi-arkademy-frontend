
const initState = {
  data: {},
  errMessage: null,
  isLoading: false
}

const auth = (state=initState, action) => {
  switch (action.type) {

    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        errMessage: 'Username or password did not match'
      }
    }

    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: true,
        errMessage: null,
        data: action.payload.data
      }
    }

    case 'REFRESH_TOKEN_PENDING': {
      return {
        ...state,
        isLoading: true,
        errMessage: null
      }
    }

    case 'REFRESH_TOKEN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        errMessage: 'token invalid'
      }
    }

    case 'REFRESH_TOKEN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        errMessage: null
      }
    }

    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: false,
      }
    }

    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Cannot Create Account, Please Check Your Data!'
      }
    }

    case 'REGISTER_FULLFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      }
    }

    case 'LOGOUT_FULFILLED': {
      return{
        data: {}
      }
    }

    default: {
      return state;
    }
  }
}

export default auth