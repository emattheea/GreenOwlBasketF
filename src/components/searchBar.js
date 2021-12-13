// import React, { useState, } from 'react';
// import { Axios } from 'axios';

// const  SearchBox = () => {
//   const [product,setProducts] = useState("");
  
  
//   const onChange  = () => {
//     console.log(product)
//     setProducts(event.target.value)
//   }
//   const submitHandler = event => {
//      event.preventDefault();
//      Axios.get('https://fakestoreapi.com/products')
//           .catch(function (error) {
//           if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//           } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//             // http.ClientRequest in node.js
//             console.log(error.request);
//           } else {
//             // Something happened in setting up the request that triggered an Error
//             console.log('Error', error.message);
//           }
//           console.log(error.config);
//         })
//         .then( response =>{
//             console.log(response)
//             setProducts(response.data)
//     })
//         .catch ( err => {
//             console.log(err)
//     })
     
//      setProducts(" ");
//   }
//   return (
//     <form className="search" onSubmit={submitHandler}>
//       <div className="row">
//         <input
//           type="text"
//           value={product}
//           onChange={event => setProducts(event.target.value)}
//         ><ul>
//         {products.map((product) => (
//           <li>{product}</li>
//         ))}
//       </ul></input>
//         <button className="primary" type="submit">
//           <i className="fa fa-search"></i>
//         </button>
//       </div>
//     </form>
//   );
// }

// export default SearchBox;