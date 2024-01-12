import axios from 'axios';
import React, { useState } from 'react';
import './Signup.css'; // Import the external stylesheet

function Signup() {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registerData = {
      fullName,
      userName,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:4000/app/signup', registerData);
      console.log(response.data);

      // Redirect to the login page after successful registration
      window.location = '/login';
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='container-wrapper-css'>
      <div className='container-css'>
        <div className='form-div-css'>
          <form>
            <label htmlFor='fullName'>Full Name:</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              placeholder='Full Name'
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              className='form-control form-group'
            />

            <label htmlFor='userName'>Username:</label>
            <input
              type='text'
              id='userName'
              name='userName'
              placeholder='Username'
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className='form-control form-group'
            />

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
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;