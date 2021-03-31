import React, { useState } from 'react';
import { Register } from './../redux/actions/auth';
import { connect } from 'react-redux';


export const UserSignUp = (props) => {
  const [signUp, setSignUp] = useState({
    full_name: '',
    username: '',
    password: ''
  });

  const handleSignUp = () => {
    props.Register({
      full_name: signUp.full_name,
      username: signUp.username,
      password: signUp.password
    })
  }

  return (
    <div className='signup-container'>
      {
        <form>
          <label id='full_name-label' htmlFor='full_name'>Full Name: </label>
            <input type="Full Name" placeholder='Full Name' onChange={(e) => 
              setSignUp({
                ...signUp,
                full_name: e.target.value
              })
            }/><br></br>
            <label id='username-label' htmlFor='username'>Username: </label>
              <input type='Username' placeholder='Username' onChange={(e) => 
                setSignUp({
                  ...signUp,
                  username: e.target.value
              })
            }/><br></br>
            <label id='password-label' htmlFor='password'>Password: </label>
              <input type='Password' placeholder='Password' onChange={(e) => 
                setSignUp({
                  ...signUp,
                  password: e.target.value
              })
             }/><br></br>
            <button className='btn-create-account' onClick={handleSignUp}>Create Account</button>
        </form>
        }
    </div>
  )
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { Register };


export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(UserSignUp)