// import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function Login() {
  let [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  let handleInputChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value }; //compute value
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return alert('All field are required');
    }
    axios
      .post('/api/login', formData)
      .then((response) => {
        if (response.data === 'Login Successfull') {
          window.location.href = '/about';
          return alert('Login Successfull Done');
        } else if (response.data === 'User does not exist') {
          return alert('Invalid Credentials');
        }
      })
      .catch((error) => console.log(error));

    setFormData({
      email: '',
      password: '',
    });
  }
  return (
    <>
      <h1>Login</h1>
      <form action="/login" method="post" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder=" Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
