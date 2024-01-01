// import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
  let [formData, setFormData] = useState({
    name: '',
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

    if (!formData.name || !formData.email) {
      return alert('All field are required');
    }
    axios
      .post('/api/register', formData)
      .then((response) => {
        if (response.data === 'ok') {
          return alert('Registration Successfull');
        } else if (response.data === 'You are already register') {
          return alert('You are already register');
        }
      })
      .catch((error) => console.log(error));

    setFormData({
      name: '',
      email: '',
      password: '',
    });
  }
  return (
    <>
      <h1>Sign Up</h1>
      <form action="/register" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <br />
        <br />
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
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default SignUp;
