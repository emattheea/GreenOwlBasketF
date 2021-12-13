import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Axios from axios;

const Register = () =>{
    
    const [name,setName ]= useState ();
    const [email,setEmail] =useState();
    
    const submitHandler = () =>{
      e.preventDefault();
      setValue(name);
      console.log(name);
      setEmail(email);
      console.log(email);
     
      useEffect ( () => {
        async const fetchData = () => {
            const response = Axios.post('http://localhost:5000/api/users/register')
            console.log(response)
            setValue(response.data)
        }
        fetchData();
    },[name,email]);
  }

     
    

    
    return(
        <div>
            <form className="form" onSubmit={submitHandler}>
            <div>
          <h1>Create Account</h1>
        
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value = "name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => password.setValue(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
        </div>
            </form>
        </div>
    );
}
export default Register;

    

