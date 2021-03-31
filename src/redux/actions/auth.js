import axios from 'axios';


export const Register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios({
      method: 'POST',
      url: 'http://localhost:3001/auth/signup',
      data: {
        full_name: data.full_name,
        username: data.username,
        password: data.password
      }
    })
  };
};

export const Login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: 'http://localhost:3001/auth/signin',
      data: {
        username: data.username,
        password: data.password
      }
    })
  };
};

export const RefreshToken = (token) => {
  return {
    type: 'REFRESH_TOKEN',
    payload: axios({
      method: 'POST',
      url: 'http://localhost:3001/auth/refresh-token',
      headers: {
        Authorization: token
      }
    })
  }
}

export const Logout = () => {
  return {
    type: 'LOGOUT'
  }
}