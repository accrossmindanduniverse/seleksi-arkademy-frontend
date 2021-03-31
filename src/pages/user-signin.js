import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Login, RefreshToken } from '../redux/actions/auth';
import './styles/user-signin.css'

export const UserSignIn = (props) => {
  const [signIn, setSignIn] = useState({
    username: '',
    password: '',
    token: '',
  });


  const handleGoToHome = () => {
    props.history.push('/')
  }

  const handleSignIn = () => {
    props.Login({
      username: signIn.username,
      password: signIn.password,
    }).then((res) => {
      console.log(res)
      const newToken = res.value.data.data.token
      props.RefreshToken(newToken).then((result) => {
        localStorage.setItem('token', result.action.payload.data.data.refreshToken)
      })
      handleGoToHome()
    })
  }

  return (
    <div className='signin-container'>
      {
        <div onKeyDown={(e) => {if (e.key === 'Enter') handleSignIn()}}>
            <input className='input-username' type='text' value={signIn.username} placeholder='Username' onChange={(e) => 
              setSignIn({
                ...signIn,
                username: e.target.value
              })}/><br></br>
            <input className='input-password' type='password' value={signIn.password} placeholder='Password' onChange={(e) => 
              setSignIn({
                ...signIn,
                password: e.target.value
              })}/><br></br>
          <button className='btn-signin' onClick={handleSignIn}>Sign In</button><br></br>
          <button className='btn-signup' onClick={() => {
            props.history.push('/signup')
          }}>Sign Up</button>
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { Login, RefreshToken };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignIn);