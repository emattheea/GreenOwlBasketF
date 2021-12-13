import React from 'react';

const [email,setEmail] = useState();
const [password,setPassword] =  useState();
 
const onChange = () => {
  console.log(email);
  setEmail(e.target.value);
  console.log(password);
  setPassword(e.target.value);

}
const onSubmit = () =>{
  useEffect ( () => {
    async const fetchData = () => {
        const response = Axios.post('http://localhost:5000/api/users/')
        console.log(response)
        setValue(response.data)
    }
    fetchData();
},[email,password]);

}


const Register = () => {
    <div>
        <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
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
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
}