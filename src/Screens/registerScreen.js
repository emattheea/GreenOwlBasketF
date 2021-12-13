import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {axios} from 'axios'



const RegisterScreen = () => {
  const initialValues = {
    name:"",
    email:"",
    password:"",
}
const [data,setData] =useState(initialValues);
const handleChange  = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    };
    console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/register',{
      name: data.name,
      email:data.email,
      password: data.password
    })
    .then((res) => {
      console.log("server response:",res);
    })
    .catch((err) =>{
    console.log("Server responded with error", err);
    })
  }
        return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h1>Create Account</h1>
         <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            value={data.name}
            placeholder="Enter name"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter email"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter password"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to={`/signin`}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;