import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registerData = {
      email,
      password,
    };

    // post data to backend
    try {
      const response = await axios.post('http://localhost:4000/app/login', registerData);
      console.log(response.data);

      // Redirect to the plans page after successful registration
      window.location = '/Plans';
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='container-wrapper-css'>
      <div className='container-css'>
        <div className='form-div-css'>
          <form>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='form-control form-group'
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='form-control form-group'
            />

            <button type='button' className='btn btn-block' onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
